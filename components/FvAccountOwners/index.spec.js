import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvAccountOwners from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const accounts = [
  {
    name: 'Toto',
    firstname: 'toto',
    lastname: 'La Riflette',
    type: 'Personal'
  },
  {
    name: 'JP Mashmure',
    firstname: 'Jean-paul',
    lastname: 'Mashmure',
    type: 'Personal'
  },
  {
    name: 'Cosys',
    type: 'Business'
  }
]

const $activeAccount = {
  get: jest.fn()
}

const factory = (propsData) => {
  return shallowMount(FvAccountOwners, {
    localVue,
    store,
    propsData: {
      ...propsData
    },
    mocks: {
      $activeAccount
    }
  })
}

describe('FvAccountOwners', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        directory: {
          namespaced: true,
          getters: {
            all: () => accounts
          }
        },
        accounts: {
          namespaced: true,
          actions: {
            all: jest.fn()
          },
          getters: {
            findById: () => () => {
              return accounts[0]
            }
          }
        }
      }
    })
  })
  it('should render a fv account owners', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="ownerAutocomplete"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="ownerList"]').exists()).toBe(true)
  })
  it('should give all accounts to accounts autocomplete', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="ownerAutocomplete"]')
    expect(autocomplete.props().items).toEqual(accounts)
  })
  it('should add a owner to owner list when owner is selected', async () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="ownerAutocomplete"]')
    const owner = {
      name: 'Toto',
      firstname: 'toto',
      lastname: 'La Riflette',
      type: 'Personal'
    }
    autocomplete.vm.$emit('account:selected', owner)
    await wrapper.vm.$nextTick()
    const ownerList = wrapper.find('[data-testid="ownerList"]')
    expect(ownerList.html().includes(owner.name)).toBe(true)
  })
  it('should remove selected accounts to account autocomplete list', async () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="ownerAutocomplete"]')
    const owner = {
      name: 'Toto',
      firstname: 'toto',
      lastname: 'La Riflette',
      type: 'Personal'
    }
    autocomplete.vm.$emit('account:selected', owner)
    await wrapper.vm.$nextTick()
    const expectedItems = [
      {
        name: 'JP Mashmure',
        firstname: 'Jean-paul',
        lastname: 'Mashmure',
        type: 'Personal'
      },
      {
        name: 'Cosys',
        type: 'Business'
      }
    ]
    expect(autocomplete.props().items).toEqual(expectedItems)
  })
  it('should display owners with given list', () => {
    const owners = [
      {
        name: 'Toto',
        firstname: 'toto',
        lastname: 'La Riflette',
        type: 'Personal'
      },
      {
        name: 'JP Mashmure',
        firstname: 'Jean-paul',
        lastname: 'Mashmure',
        type: 'Personal'
      },
      {
        name: 'Cosys',
        type: 'Business'
      }
    ]
    const wrapper = factory({ value: owners })
    const ownerList = wrapper.find('[data-testid="ownerList"]')
    owners.forEach((owner) => {
      expect(ownerList.html().includes(owner.name)).toBe(true)
    })
  })
  it('should remove owner from owner list', async () => {
    const owners = [
      {
        name: 'Toto',
        firstname: 'toto',
        lastname: 'La Riflette',
        type: 'Personal'
      },
      {
        name: 'JP Mashmure',
        firstname: 'Jean-paul',
        lastname: 'Mashmure',
        type: 'Personal'
      },
      {
        name: 'Cosys',
        type: 'Business'
      }
    ]
    const wrapper = factory({ value: owners })
    const selectedOwners = wrapper.findAll('[data-testid="owner"]')
    expect(selectedOwners.length).toBe(3)
    const owner = wrapper.find('[data-testid="owner"]')
    owner.vm.$emit('click:close')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('[data-testid="owner"]').length).toBe(2)
  })
  it('should add active account as owner if there is no default owners', async () => {
    const wrapper = factory()
    await wrapper.vm.$nextTick()
    const ownerList = wrapper.find('[data-testid="ownerList"]')
    expect(ownerList.html().includes(accounts[0].name)).toBe(true)
  })
  it('should send an event when a owner is added', async () => {
    const wrapper = factory({ value: [accounts[0]] })
    const autocomplete = wrapper.find('[data-testid="ownerAutocomplete"]')
    const owner = {
      name: 'JP Mashmure',
      firstname: 'Jean-paul',
      lastname: 'Mashmure',
      type: 'Personal'
    }
    autocomplete.vm.$emit('account:selected', owner)
    await wrapper.vm.$nextTick()
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = []
    expectedPayload.push(accounts[0])
    expectedPayload.push(owner)
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should send an event when an owner is removed', async () => {
    const owners = [
      {
        name: 'Toto',
        firstname: 'toto',
        lastname: 'La Riflette',
        type: 'Personal'
      },
      {
        name: 'JP Mashmure',
        firstname: 'Jean-paul',
        lastname: 'Mashmure',
        type: 'Personal'
      },
      {
        name: 'Cosys',
        type: 'Business'
      }
    ]
    const wrapper = factory({ value: owners })
    const owner = wrapper.find('[data-testid="owner"]')
    owner.vm.$emit('click:close')
    await wrapper.vm.$nextTick()
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = [
      {
        name: 'JP Mashmure',
        firstname: 'Jean-paul',
        lastname: 'Mashmure',
        type: 'Personal'
      },
      {
        name: 'Cosys',
        type: 'Business'
      }
    ]
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should send an event when default owner is added', async () => {
    const wrapper = factory()
    await wrapper.vm.$nextTick()
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = []
    expectedPayload.push(accounts[0])
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
})
