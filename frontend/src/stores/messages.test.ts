import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMessagesStore } from './messages'

// 模拟 firebase 模块
vi.mock('../utils/firebase', () => ({
  default: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        order: vi.fn(() => Promise.resolve({ data: [], error: null }))
      })),
      insert: vi.fn(() => Promise.resolve({ error: null }))
    })),
    channel: vi.fn(() => ({
      on: vi.fn(() => ({
        subscribe: vi.fn(() => 'subscription-id')
      }))
    })),
    removeChannel: vi.fn()
  }
}))

describe('Messages Store', () => {
  beforeEach(() => {
    // 创建一个新的 pinia 实例，并设置为活跃状态
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('initializes with correct default state', () => {
    const messagesStore = useMessagesStore()

    expect(messagesStore.newMessage).toBe('')
    expect(messagesStore.messageAuthor).toBe('')
    expect(messagesStore.messages).toEqual([])
    expect(messagesStore.loading).toBe(false)
    expect(messagesStore.error).toBe('')
  })

  it('addMessage should reject empty messages', async () => {
    const messagesStore = useMessagesStore()
    messagesStore.newMessage = ''
    messagesStore.messageAuthor = '测试用户'

    await messagesStore.addMessage()

    expect(messagesStore.error).toBe('')
  })

  it('addMessage should reject empty author names', async () => {
    const messagesStore = useMessagesStore()
    messagesStore.newMessage = '测试留言'
    messagesStore.messageAuthor = ''

    await messagesStore.addMessage()

    expect(messagesStore.error).toBe('')
  })

  it('addMessage should reject author names longer than 50 characters', async () => {
    const messagesStore = useMessagesStore()
    messagesStore.newMessage = '测试留言'
    messagesStore.messageAuthor = 'a'.repeat(51) // 51 个字符

    await messagesStore.addMessage()

    expect(messagesStore.error).toBe('作者名称不能超过50个字符')
  })

  it('addMessage should reject messages longer than 500 characters', async () => {
    const messagesStore = useMessagesStore()
    messagesStore.newMessage = 'a'.repeat(501) // 501 个字符
    messagesStore.messageAuthor = '测试用户'

    await messagesStore.addMessage()

    expect(messagesStore.error).toBe('留言内容不能超过500个字符')
  })

  it('addMessage should accept valid messages', async () => {
    const messagesStore = useMessagesStore()
    messagesStore.newMessage = '测试留言'
    messagesStore.messageAuthor = '测试用户'

    await messagesStore.addMessage()

    expect(messagesStore.error).toBe('')
    expect(messagesStore.newMessage).toBe('') // 应该清空输入
    expect(messagesStore.messageAuthor).toBe('') // 应该清空作者
  })

  it('loadMessages should set loading state', async () => {
    const messagesStore = useMessagesStore()

    const promise = messagesStore.loadMessages()

    expect(messagesStore.loading).toBe(true)

    await promise

    expect(messagesStore.loading).toBe(false)
  })
})
