import { mount } from '@vue/test-utils'
import FvAccountCard from './index.vue'

beforeEach(() => {
  jest.clearAllMocks()
})

const $auth = {
  user: {
    sub: '',
  },
}

const givenRole = {
  id: 1,
  from_type: 'Account',
  from_id: 1,
  to_type: 'User',
  to_id: 'c7e4d104-2e45-4056-94cc-10a87af32693',
  role: 'admin',
  data: null,
  status: 'active',
}

const $repos = {
  givenRoles: {
    index: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([givenRole])
        }, 300)
      }),
  },
}

const factory = (propsData) => {
  return mount(FvAccountCard, {
    propsData: {
      ...propsData,
      type: 'Personal',
    },
    mocks: {
      $t: (msg) => msg,
      $auth,
      $repos,
    },
  })
}

describe('FvAccountCard', () => {
  it('should render a fv account card', () => {
    const wrapper = factory({ id: 1 })
    expect(wrapper.find('[data-testid="card"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="name"]').exists()).toBeTruthy()
  })
  it('should display avatar prop', () => {
    const img = '/images/avatar-1.png'
    const wrapper = factory({ id: 1, avatar: img })
    const avatar = wrapper.find('[data-testid="avatar"]')
    expect(avatar.props().avatar).toBe(img)
  })
  it('should display account name prop', () => {
    const expectedName = 'helloWorld'
    const wrapper = factory({ id: 1, name: expectedName })
    const name = wrapper.find('[data-testid="name"]')
    expect(name.text()).toBe(expectedName)
  })
  it('should emit an event when favorite is clicked', () => {
    const wrapper = factory({ id: 1 })
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('favorite:clicked')
    const favoriteCalls = wrapper.emitted('accountCard:favoriteClicked')
    expect(favoriteCalls).toBeTruthy()
    expect(favoriteCalls).toHaveLength(1)
  })
  // WIP flas, add missing tests
  // it('should display the required role', () => {
  //   const wrapper = factory({ id: 1 })
  //   const expectedResult = ''
  //   const result = wrapper.vm.cardClicked()
  //   console.log('result :', result)
  //   // expect(result).toEqual(expectedResult)
  // })
})
