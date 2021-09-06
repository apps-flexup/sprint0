import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvDataTableHeader from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
const factory = () => {
  return mount(FvDataTableHeader, {
    localVue,
    store
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
          settings: () => jest.fn()
        }
      }
    }
  })
})

describe('FvDataTableHeader', () => {
  it('should render a fv data table header', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=title]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=filters]').exists()).toBe(false)
    expect(wrapper.find('[data-testid=searchBar]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=settings]').exists()).toBe(true)
  })
  it('should display filters when available', async () => {
    const filters = ['filter1', 'filter2']
    const wrapper = factory()
    await wrapper.setData({ filters })
    expect(wrapper.find('[data-testid=filters]').exists()).toBe(true)
  })
  it('should emit an event when filter changed', () => {
    const filters = ['filter 1']
    const wrapper = factory()
    const searchBar = wrapper.find('[data-testid=searchBar]')
    searchBar.vm.$emit('dataTableSearchBar:changed', filters[0])
    const filtersChangeCalls = wrapper.emitted('dataTableSearch:filtersChanged')
    expect(filtersChangeCalls).toBeTruthy()
    expect(filtersChangeCalls).toHaveLength(1)
    expect(filtersChangeCalls[0][0]).toEqual(filters)
  })
  it('should add a filter to the list if the filter does not already exists', () => {
    const expectedFilters = ['filter 1']
    const wrapper = factory()
    const searchBar = wrapper.find('[data-testid=searchBar]')
    searchBar.vm.$emit('dataTableSearchBar:filterValidated', expectedFilters[0])
    const filtersChangeCalls = wrapper.emitted('dataTableSearch:filtersChanged')
    expect(filtersChangeCalls).toBeTruthy()
    expect(filtersChangeCalls).toHaveLength(1)
    expect(filtersChangeCalls[0][0]).toEqual(expectedFilters)
  })
  it('should not add a filter to the list if the filter already exists', async () => {
    const expectedFilters = ['filter 1']
    const wrapper = factory()
    await wrapper.setData({ filters: expectedFilters })
    const searchBar = wrapper.find('[data-testid=searchBar]')
    searchBar.vm.$emit('dataTableSearchBar:filterValidated', expectedFilters[0])
    const filtersChangeCalls = wrapper.emitted('dataTableSearch:filtersChanged')
    expect(filtersChangeCalls).toBeFalsy()
  })
  it('should remove filter if it exists', async () => {
    const filters = ['filter 1']
    const wrapper = factory()
    await wrapper.setData({ filters })
    const filterList = wrapper.find('[data-testid="filters"]')
    filterList.vm.$emit('click:close')
    const filtersChangeCalls = wrapper.emitted('dataTableSearch:filtersChanged')
    expect(filtersChangeCalls).toBeTruthy()
    expect(filtersChangeCalls).toHaveLength(1)
    expect(filtersChangeCalls[0][0]).toEqual([])
  })
  it('should emit an event when clicked on settings', () => {
    const wrapper = factory()
    const settings = wrapper.find('[data-testid="settings"]')
    settings.vm.$emit('icon:clicked')
    const settingsCalls = wrapper.emitted('dataTableHeader:settingsClicked')
    expect(settingsCalls).toBeTruthy()
    expect(settingsCalls).toHaveLength(1)
  })
})
