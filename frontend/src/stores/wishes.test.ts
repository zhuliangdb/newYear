import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useWishesStore } from './wishes'

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

describe('Wishes Store', () => {
  beforeEach(() => {
    // 创建一个新的 pinia 实例，并设置为活跃状态
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('initializes with correct default state', () => {
    const wishesStore = useWishesStore()

    expect(wishesStore.newWish).toBe('')
    expect(wishesStore.wishes).toEqual([])
    expect(wishesStore.loading).toBe(false)
    expect(wishesStore.error).toBe('')
  })

  it('addWish should reject empty wishes', async () => {
    const wishesStore = useWishesStore()
    wishesStore.newWish = ''

    await wishesStore.addWish()

    expect(wishesStore.error).toBe('')
  })

  it('addWish should reject wishes longer than 200 characters', async () => {
    const wishesStore = useWishesStore()
    wishesStore.newWish = 'a'.repeat(201) // 201 个字符

    await wishesStore.addWish()

    expect(wishesStore.error).toBe('愿望内容不能超过200个字符')
  })

  it('addWish should accept valid wishes', async () => {
    const wishesStore = useWishesStore()
    wishesStore.newWish = '测试愿望'

    await wishesStore.addWish()

    expect(wishesStore.error).toBe('')
    expect(wishesStore.newWish).toBe('') // 应该清空输入
  })

  it('likeWish should increment like count', () => {
    const wishesStore = useWishesStore()
    wishesStore.wishes = [
      { id: '1', content: '测试愿望', likes: 0, created_at: new Date().toISOString() }
    ]

    wishesStore.likeWish('1')

    expect(wishesStore.wishes[0].likes).toBe(1)
  })

  it('likeWish should not modify wishes when loading', () => {
    const wishesStore = useWishesStore()
    wishesStore.loading = true
    wishesStore.wishes = [
      { id: '1', content: '测试愿望', likes: 0, created_at: new Date().toISOString() }
    ]

    wishesStore.likeWish('1')

    expect(wishesStore.wishes[0].likes).toBe(0)
  })

  it('loadWishes should set loading state', async () => {
    const wishesStore = useWishesStore()

    const promise = wishesStore.loadWishes()

    expect(wishesStore.loading).toBe(true)

    await promise

    expect(wishesStore.loading).toBe(false)
  })
})
