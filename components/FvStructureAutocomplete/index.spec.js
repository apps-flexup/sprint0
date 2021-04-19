import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvThirdPartyAccountAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvThirdPartyAccountAutocomplete', () => {
  let store
  const paymentStructures = [
    {
      label: 'B25 + E75',
      paymentConditions: [
        {
          id: 3,
          portion: 25
        },
        {
          id: 2,
          portion: 75
        }
      ],
      risk: 80,
      account_id: 1,
      id: 1
    },
    {
      label: 'B50 + F25 + E25',
      paymentConditions: [
        {
          id: 3,
          portion: 50
        },
        {
          id: 4,
          portion: 25
        },
        {
          id: 2,
          portion: 25
        }
      ],
      risk: 46.25,
      account_id: 1,
      id: 2
    }
  ]
  const factory = () => {
    return mount(FvThirdPartyAccountAutocomplete, {
      localVue,
      store,
      stubs: {
        FvAutocomplete: true
      },
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        paymentStructures: {
          namespaced: true,
          actions: {
            get: jest.fn()
          },
          getters: {
            all: () => paymentStructures
          }
        }
      }
    })
  })
  it('should render a structure autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    autocomplete.vm.$emit('autocomplete:selected', paymentStructures)
    const submittedCalls = wrapper.emitted('structures:selected')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(paymentStructures)
  })
  it('should return the payment structures', () => {
    const wrapper = factory()
    expect(wrapper.vm.items).toBe(paymentStructures)
  })
})
