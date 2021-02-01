import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

const headers = [
  {
    text: 'column1',
    value: 'column1',
    sortable: true
  },
  {
    text: 'column2',
    value: 'column2',
    sortable: true
  },
  {
    text: 'column3',
    value: 'column3',
    sortable: false
  }
]

const factory = (propsData) => {
  return mount(FvDataTable, {
    localVue,
    store,
    vuetify,
    stubs: {
      FvTh: true
    },
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}
beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      settings: {
        namespaced: true,
        actions: {
          getSettings: jest.fn()
        },
        getters: {
          settings() {
            return {
              theme: 'light'
            }
          }
        }
      }
    }
  })
})

describe('FvDataTable', () => {
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('should render a fv data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
  it('should display headers', () => {
    const wrapper = factory({ headers })
    expect(wrapper.findAll('[data-testid="fvTh"]').length).toBe(3)
  })
  it('should emit an event when click on header', () => {
    const wrapper = factory({ headers })
    const header = wrapper.find('[data-testid="fvTh"]')
    header.vm.$emit('th:sort')
    const sortCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortCalls).toBeTruthy()
    expect(sortCalls).toHaveLength(1)
  })
})
