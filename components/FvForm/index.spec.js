import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FvForm from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const $router = {
  push: jest.fn(),
  go: jest.fn(),
}

describe('FvForm', () => {
  let store
  const formSteps = [
    {
      title: 'forms.product.step.0',
    },
  ]
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const factory = (propsData) => {
    return shallowMount(FvForm, {
      store,
      localVue,
      propsData: {
        form: 'products',
        ...propsData,
      },
      computed: {
        formSteps: () => formSteps,
      },
      mocks: {
        $t: (msg) => msg,
        $nuxt: {
          $loading: {
            start: jest.fn(),
            finish: jest.fn(),
          },
        },
        $activeAccount: {
          addProduct: jest.fn(),
        },
        $router,
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        forms: {
          namespaced: true,
          state: {},
          actions: {
            getProduct: jest.fn(),
            getSubAccount: jest.fn(),
            getThirdPartyAccount: jest.fn(),
            getPaymentCondition: jest.fn(),
            getPaymentStructure: jest.fn(),
            getBusinessAccount: jest.fn(),
            getPersonalAccount: jest.fn(),
          },
        },
        members: {
          namespaced: true,
          state: {},
          actions: {
            get: jest.fn(),
          },
        },
      },
    })
  })
  it('should render a readonly form by default', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="pageTitle"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="editBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="steps"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="stepForm"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancelBtn"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="submitBtn"]').exists()).toBe(false)
  })
  it('should render a writable form', () => {
    const wrapper = factory({ action: 'edit' })
    expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="pageTitle"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="editBtn"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="steps"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="stepForm"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancelBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submitBtn"]').exists()).toBe(true)
  })
  it('should change page when back icon is clicked and form is in read mode', () => {
    const wrapper = factory()
    const iconBack = wrapper.find('[data-testid="icon"]')
    iconBack.vm.$emit('icon:clicked')
    const expectedPath = -1
    expect($router.go).toHaveBeenCalledTimes(1)
    expect($router.go).toHaveBeenCalledWith(expectedPath)
  })
  it('should change page when back icon is clicked and form is initially in edit mode', () => {
    const wrapper = factory({ action: 'edit' })
    const iconBack = wrapper.find('[data-testid="icon"]')
    iconBack.vm.$emit('icon:clicked')
    const expectedPath = -1
    expect($router.go).toHaveBeenCalledTimes(1)
    expect($router.go).toHaveBeenCalledWith(expectedPath)
  })
  it('should change page when back icon is clicked and form is initially in new mode', () => {
    const wrapper = factory({ action: 'new' })
    const iconBack = wrapper.find('[data-testid="icon"]')
    iconBack.vm.$emit('icon:clicked')
    const expectedPath = -1
    expect($router.go).toHaveBeenCalledTimes(1)
    expect($router.go).toHaveBeenCalledWith(expectedPath)
  })
  it('should pass in edit mode when back icon is clicked and form is in edit mode but was initially in read mode', async () => {
    const wrapper = factory({ action: 'read' })
    const editBtn = wrapper.find('[data-testid="editBtn"]')
    editBtn.vm.$emit('icon:clicked')
    await wrapper.vm.$nextTick()
    const iconBack = wrapper.find('[data-testid="icon"]')
    iconBack.vm.$emit('icon:clicked')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="editBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancelBtn"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="submitBtn"]').exists()).toBe(false)
  })
  it('should change page when cancel button is clicked and form is initially in edit mode', () => {
    const wrapper = factory({ action: 'edit' })
    const cancelBtn = wrapper.find('[data-testid="cancelBtn"]')
    cancelBtn.vm.$emit('button:click')
    const expectedPath = -1
    expect($router.go).toHaveBeenCalledTimes(1)
    expect($router.go).toHaveBeenCalledWith(expectedPath)
  })
  it('should pass in edit mode when cancel button is clicked and form is in edit mode but was initially in read mode', async () => {
    const wrapper = factory({ action: 'read' })
    const editBtn = wrapper.find('[data-testid="editBtn"]')
    editBtn.vm.$emit('icon:clicked')
    await wrapper.vm.$nextTick()
    const cancelBtn = wrapper.find('[data-testid="cancelBtn"]')
    cancelBtn.vm.$emit('button:click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="editBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancelBtn"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="submitBtn"]').exists()).toBe(false)
  })
  it('should send signal when form is submitted', () => {
    const wrapper = factory({ form: 'offers', action: 'edit' })
    const submitBtn = wrapper.find('[data-testid="submitBtn"]')
    submitBtn.vm.$emit('button:click')
    const submittedCalls = wrapper.emitted('form:submit')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
})
