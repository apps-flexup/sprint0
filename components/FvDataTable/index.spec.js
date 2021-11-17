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
    sortable: true,
    order: 0,
    customizable: true,
    active: true,
    displayed: true
  },
  {
    text: 'column2',
    value: 'column2',
    sortable: true,
    order: 1,
    customizable: true,
    active: true,
    displayed: true
  },
  {
    text: 'column3',
    value: 'column3',
    sortable: false,
    order: 2,
    customizable: true,
    active: true,
    displayed: true
  }
]

const factory = () => {
  return mount(FvDataTable, {
    localVue,
    store,
    vuetify,
    stubs: {
      FvTh: true
    },
    propsData: {
      headers
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
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="fvTh"]').length).toBe(3)
  })
  it('should emit an event when click on header', () => {
    const wrapper = factory()
    const header = wrapper.find('[data-testid="fvTh"]')
    header.vm.$emit('th:sort')
    const sortCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortCalls).toBeTruthy()
    expect(sortCalls).toHaveLength(1)
  })
  it('should emit an event when a row is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('click:row')
    const selectedCalls = wrapper.emitted('dataTable:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
  it('should emit an event to sort asc by key when sortkey is unset', () => {
    const wrapper = factory()
    const header = wrapper.find('[data-testid="fvTh"]')
    const key = 'key'
    header.vm.$emit('th:sort', key)
    const sortCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortCalls).toBeTruthy()
    expect(sortCalls).toHaveLength(1)
    const expectedPayload = {
      key,
      desc: false
    }
    expect(sortCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event to sort desc by key when sortkey is already set and previous sort was asc', async () => {
    const wrapper = factory()
    const key = 'key'
    await wrapper.setData({ sortKey: key, sortDesc: false })
    const header = wrapper.find('[data-testid="fvTh"]')
    header.vm.$emit('th:sort', key)
    const sortCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortCalls).toBeTruthy()
    expect(sortCalls).toHaveLength(1)
    const expectedPayload = {
      key,
      desc: true
    }
    expect(sortCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event to reset sort when sortkey is already set and previous sort was desc', async () => {
    const wrapper = factory()
    const key = 'key'
    await wrapper.setData({ sortKey: key, sortDesc: true })
    const header = wrapper.find('[data-testid="fvTh"]')
    header.vm.$emit('th:sort', key)
    const sortCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortCalls).toBeTruthy()
    expect(sortCalls).toHaveLength(1)
    const expectedPayload = {
      key: null,
      desc: false
    }
    expect(sortCalls[0][0]).toEqual(expectedPayload)
  })
})
