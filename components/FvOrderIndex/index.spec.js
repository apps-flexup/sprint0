import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvOrderIndex from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $router = {
  push: jest.fn()
}

const $activeAccount = {
  addOrder: jest.fn()
}

const $nuxt = {
  $loading: {
    start: jest.fn(),
    finish: jest.fn()
  }
}

const order = {
  id: 1,
  foo: 'foo'
}

const factory = () => {
  return shallowMount(FvOrderIndex, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $router,
      $activeAccount,
      $nuxt
    }
  })
}

beforeEach(() => {
  jest.clearAllMocks()
  store = new Vuex.Store({
    modules: {
      orders: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          find: () => () => order
        }
      }
    }
  })
})

describe('FvOrderIndex', () => {
  it('should render a fv order index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="orderModal"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="orderList"]').exists()).toBe(true)
  })
  it('should push new order page when clicked on create button', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid="createButton"]')
    button.vm.$emit('button:click')
    expect($router.push).toHaveBeenCalledTimes(1)
    expect($router.push).toHaveBeenCalledWith('/orders/new')
  })
  it('should set order when order is selected', () => {
    const wrapper = factory()
    const orderList = wrapper.find('[data-testid="orderList"]')
    orderList.vm.$emit('list:selected', order)
    expect(wrapper.vm.order).toEqual(order)
  })
  it('should show modal when order is selected', () => {
    const wrapper = factory()
    const orderList = wrapper.find('[data-testid="orderList"]')
    orderList.vm.$emit('list:selected', order)
    expect(wrapper.vm.showModal).toBe(true)
  })
  it('should clear order when modal is closed', async () => {
    const wrapper = factory()
    await wrapper.setData({ order })
    const modal = wrapper.find('[data-testid="orderModal"]')
    modal.vm.$emit('modal:close')
    expect(wrapper.vm.order).toEqual({})
  })
  it('should set show modal to false when modal is closed', async () => {
    const wrapper = factory()
    await wrapper.setData({ showModal: true })
    const modal = wrapper.find('[data-testid="orderModal"]')
    modal.vm.$emit('modal:close')
    expect(wrapper.vm.showModal).toBe(false)
  })
  it('should save order in active account when modal is saved', async () => {
    const wrapper = factory()
    await wrapper.setData({ order })
    const modal = wrapper.find('[data-testid="orderModal"]')
    modal.vm.$emit('modal:save')
    expect($activeAccount.addOrder).toHaveBeenCalledTimes(1)
    expect($activeAccount.addOrder).toHaveBeenCalledWith(order)
  })
  it('should set show modal to false when modal is saved', async () => {
    const wrapper = factory()
    await wrapper.setData({ showModal: true })
    const modal = wrapper.find('[data-testid="orderModal"]')
    modal.vm.$emit('modal:save')
    expect(wrapper.vm.showModal).toBe(false)
  })
  it('should clear order when modal is saved', async () => {
    const wrapper = factory()
    await wrapper.setData({ order })
    const modal = wrapper.find('[data-testid="orderModal"]')
    modal.vm.$emit('modal:save')
    expect(wrapper.vm.order).toEqual({})
  })
  it('should set order when order changed', () => {
    const wrapper = factory()
    const modal = wrapper.find('[data-testid="orderModal"]')
    modal.vm.$emit('order:changed', order)
    expect(wrapper.vm.order).toEqual(order)
  })
})
