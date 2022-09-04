import { mount } from '@vue/test-utils'
import FvMediaField from './index.vue'

const factory = (propsData) => {
  return mount(FvMediaField, {
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    },
    stubs: {
      FvTextField: true
    }
  })
}

describe('FvMediaField', () => {
  it('should render a fv media field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="valueField"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="labelField"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="deleteIcon"]').exists()).toBeTruthy()
  })
  it('should display media value in value field', () => {
    const value = 'value'
    const wrapper = factory({ mediaValue: value })
    const valueField = wrapper.find('[data-testid="valueField"]')
    expect(valueField.props().value).toBe(value)
  })
  it('should display media label as value field label', () => {
    const label = 'label'
    const wrapper = factory({ mediaLabel: label })
    const valueField = wrapper.find('[data-testid="valueField"]')
    expect(valueField.props().label).toBe(label)
  })
  it('should emit an event when value changed', () => {
    const wrapper = factory()
    const valueField = wrapper.find('[data-testid="valueField"]')
    const value = 'value'
    valueField.vm.$emit('input', value)
    const changedCalls = wrapper.emitted('media:value:changed')
    expect(changedCalls).toBeTruthy()
    expect(changedCalls).toHaveLength(1)
    expect(changedCalls[0][0]).toBe(value)
  })
  it('should emit an event when click in value field', () => {
    const wrapper = factory()
    const valueField = wrapper.find('[data-testid="valueField"]')
    valueField.vm.$emit('click')
    const clickedCalls = wrapper.emitted('media:value:clicked')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should display media label in label field', () => {
    const label = 'label'
    const wrapper = factory({ labelValue: label })
    const labelField = wrapper.find('[data-testid="labelField"]')
    expect(labelField.props().value).toBe(label)
  })
  it('should emit an event when label changed', () => {
    const wrapper = factory()
    const labelField = wrapper.find('[data-testid="labelField"]')
    const label = 'label'
    labelField.vm.$emit('input', label)
    const changedCalls = wrapper.emitted('media:label:changed')
    expect(changedCalls).toBeTruthy()
    expect(changedCalls).toHaveLength(1)
    expect(changedCalls[0][0]).toBe(label)
  })
  it('should emit an event when delete is clicked', () => {
    const wrapper = factory()
    const deleteIcon = wrapper.find('[data-testid="deleteIcon"]')
    deleteIcon.vm.$emit('icon:clicked')
    const deleteCalls = wrapper.emitted('media:delete:clicked')
    expect(deleteCalls).toBeTruthy()
    expect(deleteCalls).toHaveLength(1)
  })
})
