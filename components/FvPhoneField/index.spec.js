import { shallowMount } from '@vue/test-utils'
import FvPhoneField from './index.vue'

const valueType = 'Phone'

const factory = (propsData) => {
  return shallowMount(FvPhoneField, {
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvPhoneField', () => {
  it('should render a fv phone field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="phoneField"]').exists()).toBe(true)
  })
  it('should emit an event when media value changed', () => {
    const wrapper = factory()
    const phoneField = wrapper.find('[data-testid="phoneField"]')
    const phone = '0123456789'
    phoneField.vm.$emit('media:value:changed', phone)
    const phoneChangedCalls = wrapper.emitted('phone:value:changed')
    const expectedPayload = {
      value_type: valueType,
      value: phone
    }
    expect(phoneChangedCalls).toBeTruthy()
    expect(phoneChangedCalls).toHaveLength(1)
    expect(phoneChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event when media label changed', () => {
    const wrapper = factory()
    const phoneField = wrapper.find('[data-testid="phoneField"]')
    const label = 'perso'
    phoneField.vm.$emit('media:label:changed', label)
    const labelChangedCalls = wrapper.emitted('phone:label:changed')
    const expectedPayload = {
      value_type: valueType,
      label
    }
    expect(labelChangedCalls).toBeTruthy()
    expect(labelChangedCalls).toHaveLength(1)
    expect(labelChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event when phone needs to be deleted', () => {
    const wrapper = factory()
    const phoneField = wrapper.find('[data-testid="phoneField"]')
    phoneField.vm.$emit('media:delete:clicked')
    const deleteCalls = wrapper.emitted('phone:delete:clicked')
    expect(deleteCalls).toBeTruthy()
    expect(deleteCalls).toHaveLength(1)
  })
})
