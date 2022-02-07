import { shallowMount } from '@vue/test-utils'
import FvAccountList from './index'

describe('FvAccountList', () => {
  const accounts = [
    {
      avatar: '/images/avatar-0.png',
      country_id: 77,
      currency: 'EUR',
      id: 1,
      name: 'account 1',
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
    },
    {
      avatar: '/images/avatar-1.png',
      country_id: 77,
      currency: 'EUR',
      id: 2,
      name: 'account 2',
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
    },
    {
      avatar: '/images/avatar-2.png',
      country_id: 77,
      currency: 'EUR',
      id: 3,
      name: 'account 3',
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
    },
  ]
  const factory = () => {
    return shallowMount(FvAccountList, {
      propsData: {
        accounts,
      },
    })
  }
  it('should render an accounts index component', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="accountList"]').exists()).toBe(true)
  })
  it('should display account cards', () => {
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="accountCard"]').length).toBe(3)
  })
})
