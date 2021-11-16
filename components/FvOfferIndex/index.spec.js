import { shallowMount } from '@vue/test-utils'
import FvOfferIndex from './index.vue'

const $router = {
  push: jest.fn()
}

const cannotCreateOfferRights = {
  canCreateOffer: () => {
    return false
  }
}

const canCreateOfferRights = {
  canCreateOffer: () => {
    return true
  }
}

const cannotCreateOfferFactory = () => {
  return shallowMount(FvOfferIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
      $rights: cannotCreateOfferRights
    }
  })
}

const canCreateOfferFactory = () => {
  return shallowMount(FvOfferIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
      $rights: canCreateOfferRights
    }
  })
}

describe('FvOfferIndex', () => {
  let wrapper
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = cannotCreateOfferFactory()
  })
  it('should render a fv index offer', () => {
    expect(wrapper.find('[data-testid="offerList"]').exists()).toBe(true)
  })
  it('should push to show offer page when offer is selected', () => {
    const offerList = wrapper.find('[data-testid="offerList"]')
    const offerSelected = {
      id: 1,
      foo: 'foo'
    }
    offerList.vm.$emit('list:selected', offerSelected)
    expect($router.push).toHaveBeenCalledTimes(1)
    expect($router.push).toHaveBeenCalledWith(
      '/offers/read/' + offerSelected.id
    )
  })
  describe('Can create an offer', () => {
    let wrapper
    beforeEach(() => {
      wrapper = canCreateOfferFactory()
    })
    it('should push to create offer page when create offer button is clicked', () => {
      const headerIndex = wrapper.find('[data-testid="headerIndex"]')
      headerIndex.vm.$emit('button:click')
      expect($router.push).toHaveBeenCalledTimes(1)
      expect($router.push).toHaveBeenCalledWith('/offers/new')
    })
  })
})
