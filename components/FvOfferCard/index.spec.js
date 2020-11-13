import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvOfferCard from './index.vue'
import i18n from '~/.storybook/i18n'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvOfferCard', () => {
  let store
  const toPreferredCurrency = jest.fn()
  const toUnit = jest.fn()

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
    const wrapper = mount(FvOfferCard, {
      localVue,
      i18n,
      store,
      propsData: {
        img: '/images/storybook/productA.png'
      },
      directives: {
        toPreferredCurrency,
        toUnit
      }
    })
    expect(wrapper.find('[data-testid="offerCard"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="offerImg"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="offerName"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="offerPrice"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="offerRating"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="offerDetails"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="offerBuy"]').exists()).toBe(false)
  })
  it('should display action icons if mouse is over', async () => {
    const wrapper = mount(FvOfferCard, {
      localVue,
      i18n,
      store,
      propsData: {
        img: '/images/storybook/productA.png'
      },
      directives: {
        toPreferredCurrency,
        toUnit
      }
    })
    wrapper.setData({ over: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="offerDetails"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="offerBuy"]').exists()).toBe(true)
  })
  it('should emit an event when click on card', () => {
    const wrapper = mount(FvOfferCard, {
      localVue,
      i18n,
      store,
      propsData: {
        img: '/images/storybook/productA.png'
      },
      directives: {
        toPreferredCurrency,
        toUnit
      }
    })
    const card = wrapper.find('[data-testid="offerCard"]')
    card.vm.$emit('card:clicked')
    const cardClickedCalls = wrapper.emitted('offerCard:clicked')
    expect(cardClickedCalls).toBeTruthy()
    expect(cardClickedCalls).toHaveLength(1)
  })
})
