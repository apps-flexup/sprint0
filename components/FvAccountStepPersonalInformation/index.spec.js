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
    expect(wrapper.find('[data-testid="civilitySelect"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountName"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="userLastname"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="userFirstname"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountEmail"]').exists()).toBe(true)
  })
  it('should send signal when civility is changed', () => {
    const wrapper = factory()
    const civilitySelect = wrapper.find('[data-testid="civilitySelect"]')
    const civility = 'M.'
    civilitySelect.vm.$emit('input', civility)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].title).toBe(civility)
  })
  it('should send signal when account name is changed', () => {
    const wrapper = factory()
    const accountName = wrapper.find('[data-testid="accountName"]')
    const name = 'fred & cie'
    accountName.vm.$emit('input', name)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].name).toBe(name)
  })
  it('should send signal when lastname is changed', () => {
    const wrapper = factory()
    const userLastname = wrapper.find('[data-testid="userLastname"]')
    const lastname = 'fred'
    userLastname.vm.$emit('input', lastname)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].lastname).toBe(lastname)
  })
  it('should send signal when firstname is changed', () => {
    const wrapper = factory()
    const userFirstname = wrapper.find('[data-testid="userFirstname"]')
    const firstname = 'bearstone'
    userFirstname.vm.$emit('input', firstname)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].firstname).toBe(firstname)
  })
  it('should send signal when email is changed', () => {
    const wrapper = factory()
    const accountEmail = wrapper.find('[data-testid="accountEmail"]')
    const email = 'fred@flexup.org'
    accountEmail.vm.$emit('input', email)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].email).toBe(email)
  })
  it('should return the name of the payload', () => {
    const wrapper = factory({ payload: { name: 'plop' } })
    expect(wrapper.vm.name).toBe('plop')
  })
  it('should return the civility of the payload', () => {
    const wrapper = factory({ payload: { title: 'Miss' } })
    expect(wrapper.vm.title).toBe('Miss')
  })
  it('should return the lastname of the payload', () => {
    const wrapper = factory({ payload: { lastname: 'le jambon' } })
    expect(wrapper.vm.lastname).toBe('le jambon')
  })
  it('should return the firstname of the payload', () => {
    const wrapper = factory({ payload: { firstname: 'de parme' } })
    expect(wrapper.vm.firstname).toBe('de parme')
  })
  it('should return the email of the payload', () => {
    const wrapper = factory({ payload: { email: 'lejambondeparme@orange.fr' } })
    expect(wrapper.vm.email).toBe('lejambondeparme@orange.fr')
  })
  it('should return null if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.name).toBe(null)
  })
  it('should return null if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.title).toBe(null)
  })
  it('should return null if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.lastname).toBe(null)
  })
  it('should return null if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.firstname).toBe(null)
  })
  it('should return null if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.email).toBe(null)
  })
})
