import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FvAddressField from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const valueType = 'Address'

const factory = (propsData) => {
  return shallowMount(FvAddressField, {
    localVue,
    store,
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

const country = {
  name: 'France'
}

beforeEach(() => {
  // eslint-disable-next-line import/no-named-as-default-member
  store = new Vuex.Store({
    modules: {
      countries: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          findByIso3: () => () => country
        }
      }
    }
  })
})

describe('FvAddressField', () => {
  it('should render a fv address field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="addressField"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="modal"]').exists()).toBeTruthy()
  })
  it('should display address with format "street, zip, city, country"', () => {
    const address = {
      street: '10 rue des plopliers',
      zip: '12345',
      city: 'PlopLand',
      country: 'FRA'
    }
    const wrapper = factory({ address })
    const addressField = wrapper.find('[data-testid="addressField"]')
    const expectedValue = '10 rue des plopliers, 12345, PlopLand, France'
    expect(addressField.props().mediaValue).toBe(expectedValue)
  })
  it('should pass address to address modal props', () => {
    const address = {
      street: '10 rue des plopliers',
      zip: '12345',
      city: 'PlopLand',
      country: 'FRA'
    }
    const wrapper = factory({ address })
    const modal = wrapper.find('[data-testid="modal"]')
    expect(modal.props().address).toEqual(address)
  })
  it('should display address modal when click in value field', async () => {
    const wrapper = factory()
    const addressField = wrapper.find('[data-testid="addressField"]')
    addressField.vm.$emit('media:value:clicked')
    await wrapper.vm.$nextTick()
    const modal = wrapper.find('[data-testid="modal"]')
    expect(modal.props().dialog).toBeTruthy()
  })
  it('should close address modal when modal is closed', async () => {
    const wrapper = factory()
    const addressField = wrapper.find('[data-testid="addressField"]')
    addressField.vm.$emit('media:value:clicked')
    await wrapper.vm.$nextTick()
    const modal = wrapper.find('[data-testid="modal"]')
    modal.vm.$emit('modal:actions:close')
    await wrapper.vm.$nextTick()
    expect(modal.props().dialog).toBeFalsy()
  })
  it('should reset address to default value when modal is closed', async () => {
    const address = {
      street: '10 rue des plopliers',
      zip: '12345',
      city: 'PlopLand',
      country: 'FRA'
    }
    const wrapper = factory({ address })
    const addressField = wrapper.find('[data-testid="addressField"]')
    addressField.vm.$emit('media:value:clicked')
    await wrapper.vm.$nextTick()
    const modal = wrapper.find('[data-testid="modal"]')
    wrapper.vm.localAddress = null
    modal.vm.$emit('modal:actions:close')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.localAddress).toEqual(address)
  })
  it('should close address modal when modal is saved', async () => {
    const wrapper = factory()
    const addressField = wrapper.find('[data-testid="addressField"]')
    addressField.vm.$emit('media:value:clicked')
    await wrapper.vm.$nextTick()
    const modal = wrapper.find('[data-testid="modal"]')
    modal.vm.$emit('modal:actions:save')
    await wrapper.vm.$nextTick()
    expect(modal.props().dialog).toBeFalsy()
  })
  it('should set local address when modal payload change', () => {
    const address = {
      street: '10 rue des plopliers',
      zip: '12345',
      city: 'PlopLand',
      country: 'FRA'
    }
    const wrapper = factory()
    const modal = wrapper.find('[data-testid="modal"]')
    modal.vm.$emit('modal:payload:changed', address)
    expect(wrapper.vm.localAddress).toEqual(address)
  })
  it('should emit an event when address is saved', () => {
    const address = {
      street: '10 rue des plopliers',
      zip: '12345',
      city: 'PlopLand',
      country: 'FRA'
    }
    const wrapper = factory()
    const modal = wrapper.find('[data-testid="modal"]')
    modal.vm.$emit('modal:actions:save', address)
    const addressChangedCalls = wrapper.emitted('address:value:changed')
    const expectedPayload = {
      value_type: valueType,
      value: address
    }
    expect(addressChangedCalls).toBeTruthy()
    expect(addressChangedCalls).toHaveLength(1)
    expect(addressChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event when media label changed', () => {
    const wrapper = factory()
    const addressField = wrapper.find('[data-testid="addressField"]')
    const label = 'perso'
    addressField.vm.$emit('media:label:changed', label)
    const labelChangedCalls = wrapper.emitted('address:label:changed')
    const expectedPayload = {
      value_type: valueType,
      label
    }
    expect(labelChangedCalls).toBeTruthy()
    expect(labelChangedCalls).toHaveLength(1)
    expect(labelChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event when address needs to be deleted', () => {
    const wrapper = factory()
    const addressField = wrapper.find('[data-testid="addressField"]')
    addressField.vm.$emit('media:delete:clicked')
    const deleteCalls = wrapper.emitted('address:delete:clicked')
    expect(deleteCalls).toBeTruthy()
    expect(deleteCalls).toHaveLength(1)
  })
})
