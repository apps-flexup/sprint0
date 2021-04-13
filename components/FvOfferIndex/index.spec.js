import { shallowMount } from '@vue/test-utils'
import FvOfferIndex from './index.vue'

const $router = {
  push: jest.fn()
}

describe('FvOfferIndex', () => {
  const factory = () => {
    return shallowMount(FvOfferIndex, {
      mocks: {
        $t: (msg) => msg,
        $router
      }
    })
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render a fv index offer', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="createOfferButton"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="offerList"]').exists()).toBe(true)
  })
  it('should push to show offer page when offer is selected', () => {
    const wrapper = factory()
    const offerList = wrapper.find('[data-testid="offerList"]')
    const offerSelected = {
      id: 1,
      foo: 'foo'
    }
    offerList.vm.$emit('list:selected', offerSelected)
    expect($router.push).toHaveBeenCalledTimes(1)
    expect($router.push).toHaveBeenCalledWith('/offers/' + offerSelected.id)
  })
  it('should push to create offer page when create offer button is clicked', () => {
    const wrapper = factory()
    const createOfferButton = wrapper.find('[data-testid="createOfferButton"]')
    createOfferButton.vm.$emit('button:click')
    expect($router.push).toHaveBeenCalledTimes(1)
    expect($router.push).toHaveBeenCalledWith('/offers/new')
  })
})
