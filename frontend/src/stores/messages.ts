import { ref, onMounted, onBeforeUnmount } from 'vue'
import { defineStore } from 'pinia'
// 由于 firebase 是 JavaScript 模块，添加类型声明
// @ts-ignore
import firebase from '../utils/firebase'

// 定义消息类型
interface Message {
  id?: string
  author: string
  content: string
  time: string
  created_at: string
}

// 定义订阅类型
type Subscription = any

export const useMessagesStore = defineStore(
  'messages',
  () => {
    // 响应式状态
    const newMessage = ref('')
    const messageAuthor = ref('')
    const messages = ref<Message[]>([])
    const loading = ref(false)
    const error = ref('')

    // 实时订阅引用
    let messagesSubscription: Subscription | null = null

    // 从Firebase加载留言
    const loadMessages = async () => {
      if (loading.value) return

      loading.value = true
      error.value = ''

      try {
        const { data, error: fetchError } = await firebase
          .from('messages')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError

        messages.value = data || []
      } catch (err) {
        console.error('加载留言失败:', err)
        error.value = '加载留言失败，请稍后重试'
      } finally {
        loading.value = false
      }
    }

    // 添加留言到Firebase
    const addMessage = async () => {
      if (!newMessage.value.trim() || !messageAuthor.value.trim() || loading.value) return

      const messageContent = newMessage.value.trim()
      const authorName = messageAuthor.value.trim()

      // 输入验证
      if (authorName.length < 1) {
        error.value = '作者名称不能为空'
        return
      }

      if (authorName.length > 50) {
        error.value = '作者名称不能超过50个字符'
        return
      }

      if (messageContent.length < 1) {
        error.value = '留言内容不能为空'
        return
      }

      if (messageContent.length > 500) {
        error.value = '留言内容不能超过500个字符'
        return
      }

      loading.value = true
      error.value = ''

      try {
        const now = new Date()
        const timeStr = now.toLocaleString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })

        const { error: insertError } = await firebase.from('messages').insert({
          author: authorName,
          content: messageContent,
          time: timeStr,
          created_at: now.toISOString()
        })

        if (insertError) throw insertError

        // 清空输入
        newMessage.value = ''
        messageAuthor.value = ''
      } catch (err) {
        console.error('添加留言失败:', err)
        error.value = '发送留言失败，请稍后重试'
      } finally {
        loading.value = false
      }
    }

    // 订阅留言实时更新
    const subscribeToMessages = () => {
      try {
        messagesSubscription = firebase
          .channel('messages-channel')
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'messages' },
            (payload: any) => {
              console.log('留言更新:', payload)
              // 重新加载留言以保持最新
              loadMessages()
            }
          )
          .subscribe()
      } catch (err) {
        console.error('订阅留言更新失败:', err)
      }
    }

    // 取消订阅
    const unsubscribeFromMessages = () => {
      if (messagesSubscription) {
        firebase.removeChannel(messagesSubscription)
        messagesSubscription = null
      }
    }

    // 生命周期钩子
    onMounted(async () => {
      await loadMessages()
      subscribeToMessages()
    })

    onBeforeUnmount(() => {
      unsubscribeFromMessages()
    })

    return {
      newMessage,
      messageAuthor,
      messages,
      loading,
      error,
      loadMessages,
      addMessage,
      subscribeToMessages,
      unsubscribeFromMessages
    }
  },
  {
    persist: true
  }
)
