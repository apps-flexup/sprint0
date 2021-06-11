import { mount } from '@vue/test-utils'
import FvAccountCard from './index.vue'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvAccountCard', () => {
  it('should render a fv account card', () => {
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1
      }
    })
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="name"]').exists()).toBe(true)
  })
  it('should display avatar prop', () => {
    const img = '/images/avatar-1.png'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1,
        avatar: img
      }
    })
    const avatar = wrapper.find('[data-testid="avatar"]')
    expect(avatar.props().avatar).toBe(img)
  })
  it('should display account name prop', () => {
    const expectedName = 'helloWorld'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1,
        name: expectedName
      }
    })
    const name = wrapper.find('[data-testid="name"]')
    expect(name.text()).toBe(expectedName)
  })
  it('should emit an event when favorite is clicked', () => {
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1
      }
    })
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('favorite:clicked')
    const favoriteCalls = wrapper.emitted('accountCard:favoriteClicked')
    expect(favoriteCalls).toBeTruthy()
    expect(favoriteCalls).toHaveLength(1)
  })
  it('should push route to account details when card clicked', () => {
    const accountId = 1
    const expectedPath = '/accounts/' + accountId
    const $router = {
      push: jest.fn()
    }
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: accountId
      },
      mocks: {
        $router
      }
    })
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('card:clicked')
    expect($router.push).toHaveBeenCalledTimes(1)
    expect($router.push).toHaveBeenCalledWith(expectedPath)
  })
})
