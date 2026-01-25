import { ref, onMounted, onBeforeUnmount } from 'vue'
import { defineStore } from 'pinia'
// 由于 firebase 是 JavaScript 模块，添加类型声明
// @ts-ignore
import firebase from '../utils/firebase'

// 定义愿望类型
interface Wish {
  id?: string
  content: string
  likes: number
  created_at: string
}

// 定义订阅类型
type Subscription = any

export const useWishesStore = defineStore('wishes', () => {
  // 响应式状态
  const newWish = ref('')
  const wishes = ref<Wish[]>([])
  const loading = ref(false)
  const error = ref('')

  // 实时订阅引用
  let wishesSubscription: Subscription | null = null

  // 从Firebase加载愿望
  const loadWishes = async () => {
    if (loading.value) return

    loading.value = true
    error.value = ''

    try {
      const { data, error: fetchError } = await firebase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) {
        console.error('Firebase加载错误:', fetchError)
        throw new Error('Firebase数据获取失败')
      }

      wishes.value = data || []
    } catch (err) {
      console.error('加载愿望失败:', err)
      error.value = '加载愿望失败，请稍后重试'
      // 可以添加错误追踪或上报
    } finally {
      loading.value = false
    }
  }

  // 添加愿望到Firebase
  const addWish = async () => {
    if (!newWish.value.trim() || loading.value) return

    const wishContent = newWish.value.trim()
    loading.value = true
    error.value = ''

    try {
      const { error: insertError } = await firebase.from('wishes').insert({
        content: wishContent,
        likes: 0,
        created_at: new Date().toISOString()
      })

      if (insertError) {
        console.error('Firebase插入错误:', insertError)
        throw new Error('Firebase数据插入失败')
      }

      // 清空输入
      newWish.value = ''
      // 重新加载愿望列表以保持最新
      await loadWishes()
    } catch (err) {
      console.error('添加愿望失败:', err)
      error.value = '发送愿望失败，请稍后重试'
      // 可以添加错误追踪或上报
    } finally {
      loading.value = false
    }
  }

  // 点赞功能
  const likeWish = (id: string) => {
    if (loading.value) return

    // 在前端更新点赞数（模拟）
    const updatedWishes = wishes.value.map(wish => {
      if (wish.id === id) {
        return {
          ...wish,
          likes: (wish.likes || 0) + 1
        }
      }
      return wish
    })
    wishes.value = updatedWishes

    // 这里可以添加后端更新逻辑（模拟）
    console.log(`点赞愿望: ${id}`)
  }

  // 订阅愿望实时更新
  const subscribeToWishes = () => {
    try {
      wishesSubscription = firebase
        .channel('wishes-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'wishes' }, (payload: any) => {
          console.log('愿望更新:', payload)
          loadWishes()
        })
        .subscribe()
    } catch (err) {
      console.error('订阅愿望更新失败:', err)
    }
  }

  // 取消订阅
  const unsubscribeFromWishes = () => {
    if (wishesSubscription) {
      firebase.removeChannel(wishesSubscription)
      wishesSubscription = null
    }
  }

  // 生命周期钩子
  onMounted(async () => {
    await loadWishes()
    subscribeToWishes()
  })

  onBeforeUnmount(() => {
    unsubscribeFromWishes()
  })

  return {
    newWish,
    wishes,
    loading,
    error,
    loadWishes,
    addWish,
    likeWish,
    subscribeToWishes,
    unsubscribeFromWishes
  }
}, {
  persist: true
})