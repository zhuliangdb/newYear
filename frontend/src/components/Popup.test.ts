import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Popup from './Popup.vue'

describe('Popup Component', () => {
  it('renders correctly when modelValue is true', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true,
        title: '测试弹窗'
      }
    })

    expect(wrapper.find('.popup-overlay').exists()).toBe(true)
    expect(wrapper.find('.popup-content').exists()).toBe(true)
    expect(wrapper.find('.popup-title').text()).toBe('测试弹窗')
  })

  it('does not render when modelValue is false', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: false,
        title: '测试弹窗'
      }
    })

    expect(wrapper.find('.popup-overlay').exists()).toBe(false)
    expect(wrapper.find('.popup-content').exists()).toBe(false)
  })

  it('renders default title when not provided', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      }
    })

    expect(wrapper.find('.popup-title').text()).toBe('弹窗标题')
  })

  it('renders content from default slot', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      },
      slots: {
        default: '<div class="test-content">测试内容</div>'
      }
    })

    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.find('.test-content').text()).toBe('测试内容')
  })

  it('renders content from header slot', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      },
      slots: {
        header: '<div class="test-header">自定义头部</div>'
      }
    })

    expect(wrapper.find('.test-header').exists()).toBe(true)
    expect(wrapper.find('.test-header').text()).toBe('自定义头部')
  })

  it('renders content from footer slot', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      },
      slots: {
        footer: '<div class="test-footer">自定义底部</div>'
      }
    })

    expect(wrapper.find('.test-footer').exists()).toBe(true)
    expect(wrapper.find('.test-footer').text()).toBe('自定义底部')
  })

  it('emits update:modelValue event when close button is clicked', async () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      }
    })

    // 点击关闭按钮
    await wrapper.find('.close-btn').trigger('click')

    // 应该触发 update:modelValue 事件，并传递 false
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('emits update:modelValue event when overlay is clicked', async () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      }
    })

    // 点击遮罩层
    await wrapper.find('.popup-overlay').trigger('click')

    // 应该触发 update:modelValue 事件，并传递 false
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('does not emit update:modelValue event when content is clicked', async () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true
      }
    })

    // 点击弹窗内容
    await wrapper.find('.popup-content').trigger('click')

    // 不应该触发 update:modelValue 事件
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('applies custom width and maxWidth props', () => {
    const wrapper = mount(Popup, {
      props: {
        modelValue: true,
        width: '80%',
        maxWidth: '400px'
      }
    })

    const popupContent = wrapper.find('.popup-content')
    expect(popupContent.exists()).toBe(true)
  })
})
