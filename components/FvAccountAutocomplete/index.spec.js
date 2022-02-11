import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FvAccountAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $displayRules = {
  accountName: jest.fn((value) => value),
}

const factory = () => {
  return shallowMount(FvAccountAutocomplete, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $displayRules,
    },
  })
}

describe('FvAccountAutocomplete', () => {
  it('should render a fv account autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBeTruthy()
  })
  it('should emit an event when account is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedAccount = {
      name: 'Toto',
      firstname: 'toto',
      lastname: 'La Riflette ',
      type: 'Personal',
    }
    autocomplete.vm.$emit('autocomplete:selected', selectedAccount)
    const selectedCalls = wrapper.emitted('account:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedAccount)
    const wrapperResult = wrapper.vm.accountName(selectedAccount)
    expect(wrapperResult).toEqual(selectedAccount)
  })
})
