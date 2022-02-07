import { shallowMount } from '@vue/test-utils'
import FvOrderForThirdPartyAccount from './index'

const factory = (propsData) => {
  return shallowMount(FvOrderForThirdPartyAccount, {
    propsData: {
      ...propsData,
    },
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvOrderForThirdPartyAccount', () => {
  it('should render a fv order for third party account', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=remove]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=thirdPartyAccountAutocomplete]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=thirdPartyAccount]').exists()).toBe(false)
    expect(wrapper.find('[data-testid=date]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=label]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=offerAutocomplete]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=paymentStructureAutocomplete]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=orderLines]').exists()).toBe(true)
    expect(wrapper.find('[data-testid=total]').exists()).toBe(true)
  })
  it('should display the third party account if the id is set', async () => {
    const wrapper = factory()
    await wrapper.setData({ thirdPartyAccountId: 1 })
    expect(wrapper.find('[data-testid=thirdPartyAccount]').exists()).toBe(true)
  })
})
