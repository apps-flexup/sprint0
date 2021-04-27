import { shallowMount } from '@vue/test-utils'
import FvAccountStepPersonalInformation from './index.vue'

describe('FvAccountStepPersonalInformation', () => {
  const factory = (propsData) => {
    return shallowMount(FvAccountStepPersonalInformation, {
      propsData: {
        ...propsData
      },
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  it('should render a fv account step personal information', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="civilityField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="nameField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="lastnameField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="firstnameField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="emailField"]').exists()).toBe(true)
  })
  it('should send signal when civility is changed', () => {
    const wrapper = factory()
    const civilityField = wrapper.find('[data-testid="civilityField"]')
    const input = 'M.'
    civilityField.vm.$emit('input', input)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].title).toBe(input)
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
  it('should send signal when lastname is changed', () => {
    const wrapper = factory()
    const lastnameField = wrapper.find('[data-testid="lastnameField"]')
    const lastname = 'fred'
    lastnameField.vm.$emit('input', lastname)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].lastname).toBe(lastname)
  })
  it('should send signal when firstname is changed', () => {
    const wrapper = factory()
    const firstnameField = wrapper.find('[data-testid="firstnameField"]')
    const firstname = 'bearstone'
    firstnameField.vm.$emit('input', firstname)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].firstname).toBe(firstname)
  })
  it('should send signal when email is changed', () => {
    const wrapper = factory()
    const emailField = wrapper.find('[data-testid="emailField"]')
    const email = 'fred@flexup.org'
    emailField.vm.$emit('input', email)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].email).toBe(email)
  })
  it('should set the name of the payload', () => {
    const wrapper = factory({ payload: { name: 'plop' } })
    expect(wrapper.vm.name).toBe('plop')
  })
  it('should set the civility of the payload', () => {
    const wrapper = factory({ payload: { title: 'Miss' } })
    expect(wrapper.vm.title).toBe('Miss')
  })
  it('should set the lastname of the payload', () => {
    const wrapper = factory({ payload: { lastname: 'le jambon' } })
    expect(wrapper.vm.lastname).toBe('le jambon')
  })
  it('should set the firstname of the payload', () => {
    const wrapper = factory({ payload: { firstname: 'de parme' } })
    expect(wrapper.vm.firstname).toBe('de parme')
  })
  it('should set the email of the payload', () => {
    const wrapper = factory({ payload: { email: 'lejambondeparme@orange.fr' } })
    expect(wrapper.vm.email).toBe('lejambondeparme@orange.fr')
  })
  it('should have null name if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.name).toBe(null)
  })
  it('should have null title if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.title).toBe(null)
  })
  it('should have null lastname if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.lastname).toBe(null)
  })
  it('should have null firstname if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.firstname).toBe(null)
  })
  it('should have null email if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.email).toBe(null)
  })
})
