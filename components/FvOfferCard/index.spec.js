import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvOfferCard from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvOfferCard', () => {
  let store
  const toPreferredCurrency = jest.fn()
  const toUnit = jest.fn()

  const factory = () => {
    return mount(FvOfferCard, {
      localVue,
      store,
      propsData: {
        img: '/images/storybook/productA.png'
      },
      mocks: {
        $t: (msg) => msg,
        $tc: (msg) => msg
      },
      directives: {
        toPreferredCurrency,
        toUnit
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          state: {},
          actions: {
            getSettings: jest.fn()
          }
        }
      }
    })
  })
  it('should render an offer card without actions', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="img"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="name"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="price"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="rating"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="detailsIcon"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="buyIcon"]').exists()).toBe(false)
  })
  it('should display action icons if mouse is over', async () => {
    const wrapper = factory()
    wrapper.setData({ over: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="detailsIcon"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="buyIcon"]').exists()).toBe(true)
  })
  it('should emit an event when click on card', () => {
    const wrapper = factory()
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('card:clicked')
    const cardClickedCalls = wrapper.emitted('offerCard:clicked')
    expect(cardClickedCalls).toBeTruthy()
    expect(cardClickedCalls).toHaveLength(1)
  })
  it('should emit an event when click on favorite', () => {
    const wrapper = factory()
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('favorite:clicked')
    const favoriteClickedCalls = wrapper.emitted('offerCard:favoriteClicked')
    expect(favoriteClickedCalls).toBeTruthy()
    expect(favoriteClickedCalls).toHaveLength(1)
  })
  it('should emit an event when click on details', async () => {
    const wrapper = factory()
    wrapper.setData({ over: true })
    await wrapper.vm.$nextTick()
    const detailsIcon = wrapper.find('[data-testid="detailsIcon"]')
    detailsIcon.vm.$emit('icon:clicked')
    const detailsClickedCalls = wrapper.emitted('offerCard:detailsClicked')
    expect(detailsClickedCalls).toBeTruthy()
    expect(detailsClickedCalls).toHaveLength(1)
  })
  it('should emit an event when click on buy', async () => {
    const wrapper = factory()
    wrapper.setData({ over: true })
    await wrapper.vm.$nextTick()
    const buyIcon = wrapper.find('[data-testid="buyIcon"]')
    buyIcon.vm.$emit('icon:clicked')
    const buyClickedCalls = wrapper.emitted('offerCard:buyClicked')
    expect(buyClickedCalls).toBeTruthy()
    expect(buyClickedCalls).toHaveLength(1)
  })
})
