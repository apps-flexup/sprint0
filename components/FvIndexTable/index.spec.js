import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvIndexTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const headers = ['1', '2']

const $activeAccount = {
  headers: () => headers,
  items: jest.fn()
}

const settings = {
  headers: []
}

const factory = () => {
  return shallowMount(FvIndexTable, {
    localVue,
    store,
    propsData: {
      tableComponent: 'fv-product-data-table'
    },
    mocks: {
      $activeAccount
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      settings: {
        namespaced: true,
        actions: {
          updateSettings: jest.fn()
        },
        getters: {
          settings: () => settings
        }
      }
    }
  })
})

describe('FvIndexTable', () => {
  it('should render a fv index table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="header"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="table"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="selectHeaders"]').exists()).toBeTruthy()
  })
  it('should update filters when filters changed', () => {
    const wrapper = factory()
    const header = wrapper.find('[data-testid="header"]')
    const filters = ['filter 1', 'filter 2']
    header.vm.$emit('dataTableSearch:filtersChanged', filters)
    expect(wrapper.vm.filters).toEqual(filters)
  })
  it('should emit an event when an item is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const item = 'plop'
    table.vm.$emit('dataTable:selected', item)
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(item)
  })
  it('should emit an event when an item is deleted', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const item = 'plop'
    table.vm.$emit('dataTable:delete', item)
    const deleteCalls = wrapper.emitted('list:delete')
    expect(deleteCalls).toBeTruthy()
    expect(deleteCalls).toHaveLength(1)
    expect(deleteCalls[0][0]).toEqual(item)
  })
  it('should set sort key when sort by is received', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const sortBy = {
      key: 'plop',
      desc: true
    }
    table.vm.$emit('dataTable:sortBy', sortBy)
    expect(wrapper.vm.sortKey).toBe(sortBy.key)
  })
  it('should set should sort desc when sort by is received', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const sortBy = {
      key: 'plop',
      desc: true
    }
    table.vm.$emit('dataTable:sortBy', sortBy)
    expect(wrapper.vm.shouldSortDesc).toBe(sortBy.desc)
  })
  it('should open modal when settings button is clicked', () => {
    const wrapper = factory()
    const header = wrapper.find('[data-testid="header"]')
    header.vm.$emit('dataTableHeader:settingsClicked')
    expect(wrapper.vm.dialog).toBeTruthy()
  })
  it('should close modal when select headers asks to close', () => {
    const wrapper = factory()
    const selectHeaders = wrapper.find('[data-testid="selectHeaders"]')
    selectHeaders.vm.$emit('selectHeaders:close')
    expect(wrapper.vm.dialog).toBeFalsy()
  })
  it('should close modal when select headers asks to save', () => {
    const wrapper = factory()
    const selectHeaders = wrapper.find('[data-testid="selectHeaders"]')
    selectHeaders.vm.$emit('selectHeaders:save')
    expect(wrapper.vm.dialog).toBeFalsy()
  })
})
