import { shallowMount } from '@vue/test-utils'
import FvMailField from './index.vue'

const valueType = 'Mail'

const factory = (propsData) => {
  return shallowMount(FvMailField, {
    propsData: {
      ...propsData,
    },
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvMailField', () => {
  it('should render a fv mail field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="mailField"]').exists()).toBe(true)
  })
  it('should emit an event when media value changed', () => {
    const wrapper = factory()
    const mailField = wrapper.find('[data-testid="mailField"]')
    const mail = 'toto@toto.com'
    mailField.vm.$emit('media:value:changed', mail)
    const mailChangedCalls = wrapper.emitted('mail:value:changed')
    const expectedPayload = {
      value_type: valueType,
      value: mail,
    }
    expect(mailChangedCalls).toBeTruthy()
    expect(mailChangedCalls).toHaveLength(1)
    expect(mailChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event when media label changed', () => {
    const wrapper = factory()
    const mailField = wrapper.find('[data-testid="mailField"]')
    const label = 'perso'
    mailField.vm.$emit('media:label:changed', label)
    const labelChangedCalls = wrapper.emitted('mail:label:changed')
    const expectedPayload = {
      value_type: valueType,
      label,
    }
    expect(labelChangedCalls).toBeTruthy()
    expect(labelChangedCalls).toHaveLength(1)
    expect(labelChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should emit an event when mail needs to be deleted', () => {
    const wrapper = factory()
    const mailField = wrapper.find('[data-testid="mailField"]')
    mailField.vm.$emit('media:delete:clicked')
    const deleteCalls = wrapper.emitted('mail:delete:clicked')
    expect(deleteCalls).toBeTruthy()
    expect(deleteCalls).toHaveLength(1)
  })
})
