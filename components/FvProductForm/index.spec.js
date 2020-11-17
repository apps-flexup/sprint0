import { mount } from '@vue/test-utils'
import FvProductForm from './index.vue'
import i18n from '~/.storybook/i18n'

describe('FvProductForm', () => {
  it('should render a form', () => {
    const wrapper = mount(FvProductForm, {
      i18n,
      stubs: {
        FvUnitAutocomplete: true,
        FvCategoryAutocomplete: true
      }
    })
    expect(wrapper.find('[data-testid="categoryAutocomplete"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="productName"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="unitAutocomplete"]').exists()).toBe(true)
  })
  it('should send signal when category is changed', () => {
    const wrapper = mount(FvProductForm, {
      i18n,
      stubs: {
        FvUnitAutocomplete: true,
        FvCategoryAutocomplete: true
      }
    })
    const categoryAutocomplete = wrapper.find(
      '[data-testid="categoryAutocomplete"]'
    )
    categoryAutocomplete.vm.$emit('category:selected')
    const submittedCalls = wrapper.emitted('product:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when name is changed', () => {
    const wrapper = mount(FvProductForm, {
      i18n,
      stubs: {
        FvUnitAutocomplete: true,
        FvCategoryAutocomplete: true
      }
    })
    const productName = wrapper.find('[data-testid="productName"]')
    productName.vm.$emit('input')
    const submittedCalls = wrapper.emitted('product:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
})
