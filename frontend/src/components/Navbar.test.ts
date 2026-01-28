import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from './Navbar.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', name: 'home', component: { template: '<div>Home</div>' } }]
})

const pinia = createPinia()

describe('Navbar Component', () => {
  it('renders correctly with default slots', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, pinia]
      }
    })

    expect(wrapper.find('.navbar-logo').exists()).toBe(true)
    expect(wrapper.find('.logo-icon').text()).toBe('🏮')
    expect(wrapper.find('.logo-text').text()).toBe('新年惊喜')
  })

  it('renders custom logo when provided', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, pinia]
      },
      slots: {
        logo: '<div class="custom-logo">自定义 Logo</div>'
      }
    })

    expect(wrapper.find('.custom-logo').exists()).toBe(true)
    expect(wrapper.find('.custom-logo').text()).toBe('自定义 Logo')
  })

  it('renders desktop links when provided', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, pinia]
      },
      slots: {
        'desktop-links': '<a href="/" class="test-link">测试链接</a>'
      }
    })

    expect(wrapper.find('.test-link').exists()).toBe(true)
    expect(wrapper.find('.test-link').text()).toBe('测试链接')
  })

  it('renders mobile links when provided', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, pinia]
      },
      slots: {
        'mobile-links': '<a href="/" class="mobile-test-link">移动端测试链接</a>'
      }
    })

    // 模拟点击移动端菜单按钮
    wrapper.find('.mobile-menu-button').trigger('click')

    expect(wrapper.find('.mobile-test-link').exists()).toBe(true)
    expect(wrapper.find('.mobile-test-link').text()).toBe('移动端测试链接')
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, pinia]
      }
    })

    // 初始状态下移动端菜单应该是关闭的
    expect(wrapper.find('.mobile-menu').classes()).not.toContain('open')

    // 点击菜单按钮
    await wrapper.find('.mobile-menu-button').trigger('click')

    // 菜单应该是打开的
    expect(wrapper.find('.mobile-menu').classes()).toContain('open')

    // 再次点击菜单按钮
    await wrapper.find('.mobile-menu-button').trigger('click')

    // 菜单应该是关闭的
    expect(wrapper.find('.mobile-menu').classes()).not.toContain('open')
  })

  it('exposes closeMobileMenu method', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, pinia]
      }
    })

    // 点击菜单按钮打开菜单
    await wrapper.find('.mobile-menu-button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.mobile-menu').classes()).toContain('open')

    // 调用 closeMobileMenu 方法
    wrapper.vm.closeMobileMenu()
    await wrapper.vm.$nextTick()

    // 菜单应该是关闭的
    expect(wrapper.find('.mobile-menu').classes()).not.toContain('open')
  })
})
