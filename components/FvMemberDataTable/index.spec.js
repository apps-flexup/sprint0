import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvMemberDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

const $displayRules = {
  userNameFromUuid: jest.fn(),
}

describe('FvMemberDataTable', () => {
  const factory = () => {
    return shallowMount(FvMemberDataTable, {
      localVue,
      store,
      vuetify,
      mocks: {
        $t: (msg) => msg,
        $displayRules,
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        functionalRoles: {
          namespaced: true,
          actions: {
            get: jest.fn(),
          },
          getters: {
            all: jest.fn(),
          },
        },
        members: {
          namespaced: true,
          actions: {
            remove: jest.fn(),
            update: jest.fn(),
          },
        },
      },
    })
    vuetify = new Vuetify()
  })
  it('should render a fv product data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="fvDataTable"]').exists()).toBe(true)
  })
  it('should emit an event when need to sort', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="fvDataTable"]')
    dataTable.vm.$emit('dataTable:sortBy')
    const sortByCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortByCalls).toBeTruthy()
    expect(sortByCalls).toHaveLength(1)
  })
})
