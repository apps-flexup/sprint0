import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvStructureAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvStructureAutocomplete', () => {
  let store
  const paymentStructures = [
    {
      label: 'B25 + E75',
      paymentConditions: [
        {
          id: 3,
          portion: 25,
        },
        {
          id: 2,
          portion: 75,
        },
      ],
      risk: 80,
      account_id: 1,
      id: 1,
    },
  ]
  const factory = () => {
    return mount(FvStructureAutocomplete, {
      localVue,
      store,
      stubs: {
        FvAutocomplete: true,
      },
      mocks: {
        $t: (msg) => msg,
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        paymentStructures: {
          namespaced: true,
          actions: {
            get: jest.fn(),
          },
          getters: {
            all: () => paymentStructures,
          },
        },
      },
    })
  })
  it('should render a structure autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when a structure is selected', () => {
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
