import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FvPaymentConditionAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const paymentConditions = [
  {
    label: 'Equity simple',
    references: {
      r1: {
        key: 'equity',
        value: 100
      },
      r2: {
        key: 'equity',
        value: 100
      },
      r3: {
        key: 'none',
        value: 100
      },
      r4: {
        key: 'none',
        value: 100
      },
      r5: {
        key: 'none',
        value: 100
      },
      r6: {
        key: 'projectOrThirdParty',
        value: 100
      },
      r7: {
        key: 'none',
        value: 100
      },
      r8: {
        key: 'none',
        value: 100
      }
    },
    risk: 100,
    account_id: 1,
    id: 2
  },
  {
    label: 'Base simple',
    references: {
      r1: {
        key: 'base',
        value: 40
      },
      r2: {
        key: 'endOfDeliveryMonth',
        value: 50
      },
      r3: {
        key: 'none',
        value: 100
      },
      r4: {
        key: 'none',
        value: 100
      },
      r5: {
        key: 'none',
        value: 100
      },
      r6: {
        key: 'projectOrThirdParty',
        value: 100
      },
      r7: {
        key: 'equity',
        value: 100
      },
      r8: {
        key: 'equity',
        value: 100
      }
    },
    risk: 20,
    account_id: 1,
    id: 3
  }
]

const factory = () => {
  return shallowMount(FvPaymentConditionAutocomplete, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg
    }
  })
}

beforeEach(() => {
  // eslint-disable-next-line import/no-named-as-default-member
  store = new Vuex.Store({
    modules: {
      paymentConditions: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: () => paymentConditions
        }
      }
    }
  })
})

describe('FvPaymentConditionAutocomplete', () => {
  it('should render a fv payment condition autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBeTruthy()
  })
  it('should emit an event when a payment condition is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    const paymentCondition = paymentConditions[0]
    autocomplete.vm.$emit('autocomplete:selected', paymentCondition)
    const selectedCalls = wrapper.emitted('paymentCondition:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(paymentCondition)
  })
})
