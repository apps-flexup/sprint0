import { shallowMount } from '@vue/test-utils'
import FvAccountMedias from './index.vue'

describe('FvAccountMedias', () => {
  const factory = (propsData) => {
    return shallowMount(FvAccountMedias, {
      propsData: {
        ...propsData
      },
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  it('should render a fv account medias', () => {
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="mediaName"]').length).toBe(3)
    expect(wrapper.findAll('[data-testid="addNewMediaButton"]').length).toBe(3)
  })
  it('should send signal when add new media is clicked', () => {
    // Ne fonctionne pas car composant STUB
    const wrapper = factory()
    const addNewMediaButton = wrapper.find('[data-testid="addNewMediaButton"]')
    addNewMediaButton.vm.$emit('button:click')
    const expectedPayload = [
      {
        description: {
          label: null,
          value: null,
          type: 'Address'
        }
      }
    ]
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should send signal when media value is changed', () => {
    const medias = [
      {
        description: {
          label: null,
          value: 'test@test.com',
          type: 'Mail'
        }
      }
    ]
    const wrapper = factory({ value: medias })
    const mailField = wrapper.find('[data-testid="mailField"]')
    const description = {
      type: 'Mail',
      value: 'super@test.com',
      label: null
    }
    mailField.vm.$emit('mail:value:changed', description)
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    medias[0].description = description
    const expectedPayload = medias
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should send signal when media label is changed', () => {
    const medias = [
      {
        description: {
          label: 'perso',
          value: null,
          type: 'Mail'
        }
      }
    ]
    const wrapper = factory({ value: medias })
    const mailField = wrapper.find('[data-testid="mailField"]')
    const description = {
      type: 'Mail',
      value: null,
      label: 'pro'
    }
    mailField.vm.$emit('mail:label:changed', description)
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    medias[0].description = description
    const expectedPayload = medias
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should send signal when media is deleted', () => {
    const medias = [
      {
        description: {
          label: 'perso',
          value: null,
          type: 'Mail'
        }
      }
    ]
    const wrapper = factory({ value: medias })
    const mailField = wrapper.find('[data-testid="mailField"]')
    mailField.vm.$emit('mail:delete:clicked')
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = []
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
})
