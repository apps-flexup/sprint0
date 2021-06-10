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
    expect(wrapper.find('[data-testid="legalStructureField"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="siretField"]').exists()).toBe(true)
  })
  it('should send signal when account legal structure is changed', () => {
    const wrapper = factory()
    wrapper._emitted['payload:changed'] = []
    const legalStructureField = wrapper.find(
      '[data-testid="legalStructureField"]'
    )
    const legalStructureId = 3
    legalStructureField.vm.$emit('legalstructure:selected', legalStructureId)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].legal_structure_id).toBe(legalStructureId)
  })
  it('should send signal when siret is changed', () => {
    const wrapper = factory()
    wrapper._emitted['payload:changed'] = []
    const siretField = wrapper.find('[data-testid="siretField"]')
    const siret = '7823256'
    siretField.vm.$emit('input', siret)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].siret).toBe(siret)
  })
  it('should set the legal structure of the payload', () => {
    const wrapper = factory({ payload: { legal_structure_id: 3 } })
    expect(wrapper.vm.legalStructureId).toBe(3)
  })
  it('should set the siret of the payload', () => {
    const wrapper = factory({ payload: { siret: '0713442' } })
    expect(wrapper.vm.siret).toBe('0713442')
  })
  it('should have null legal structure if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.legalStructureId).toBe(null)
  })
  it('should have null siret if empty payload', () => {
    const wrapper = factory()
    expect(wrapper.vm.siret).toBe(null)
  })
})
