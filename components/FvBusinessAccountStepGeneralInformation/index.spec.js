import { shallowMount } from '@vue/test-utils'
import FvBusinessAccountStepGeneralInformation from './index.vue'

describe('FvBusinessAccountStepGeneralInformation', () => {
  const factory = (propsData) => {
    return shallowMount(FvBusinessAccountStepGeneralInformation, {
      propsData: {
        ...propsData
      },
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  it('should render a fv business account step general information', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="nameField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="descriptionField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="countryField"]').exists()).toBe(true)
  })
  it('should send signal when account name is changed', () => {
    const wrapper = factory()
    const nameField = wrapper.find('[data-testid="nameField"]')
    const name = 'fred & cie'
    nameField.vm.$emit('input', name)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].name).toBe(name)
  })
  it('should send signal when description is changed', () => {
    const wrapper = factory()
    const descriptionField = wrapper.find('[data-testid="descriptionField"]')
    const description = 'jaime beaucoup le jambon'
    descriptionField.vm.$emit('input', description)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].description).toBe(description)
  })
  it('should send signal when country is changed', () => {
    const wrapper = factory()
    const countryField = wrapper.find('[data-testid="countryField"]')
    const country = {
      iso3: 'FRA'
    }
    countryField.vm.$emit('country:selected', country)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].country).toBe(country.iso3)
  })
  it('should set the name of the payload', () => {
    const wrapper = factory({ payload: { name: 'plop' } })
    expect(wrapper.vm.name).toBe('plop')
  })
  it('should set the description of the payload', () => {
    const wrapper = factory({ payload: { description: 'le jambon' } })
    expect(wrapper.vm.description).toBe('le jambon')
  })
  it('should set the country of the payload', () => {
    const wrapper = factory({ payload: { country: 'FRA' } })
    expect(wrapper.vm.country).toBe('FRA')
  })
  it('should have null name if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.name).toBe(null)
  })
  it('should have null description if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.description).toBe(null)
  })
  it('should have null country if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.country).toBe(null)
  })
})
