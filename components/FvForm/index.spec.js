import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import FvForm from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('FvForm', () => {
  let store
  const formSteps = [
    {
      component: 'fv-product-step-detail',
      title: 'forms.product.step.0'
    }
  ]

  const factory = (propsData) => {
    return shallowMount(FvForm, {
      store,
      router,
      localVue,
      propsData: {
        form: 'products',
        ...propsData
      },
      computed: {
        formSteps: () => formSteps
      },
      mocks: {
        $t: (msg) => msg,
        $nuxt: {
          $loading: {
            start: jest.fn(),
            finish: jest.fn()
          }
        },
        $activeAccount: {
          addProduct: jest.fn()
        }
      }
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
            getOffer: jest.fn(),
            getThirdPartyAccount: jest.fn(),
            getPaymentCondition: jest.fn(),
            getPaymentStructure: jest.fn(),
            getBusinessAccount: jest.fn(),
            getPersonalAccount: jest.fn()
          }
        }
      }
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
  it('should send signal when back icon is clicked', () => {
    const wrapper = factory()
    const iconBack = wrapper.find('[data-testid="icon"]')
    iconBack.vm.$emit('icon:clicked')
    const submittedCalls = wrapper.emitted('clicked')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when cancel button is clicked', () => {
    const wrapper = factory({ action: 'new' })
    const cancelBtn = wrapper.find('[data-testid="cancelBtn"]')
    cancelBtn.vm.$emit('button:click')
    const submittedCalls = wrapper.emitted('clicked')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should pass in edit mode when edit button is clicked', async () => {
    const wrapper = factory({ action: 'read' })
    const editBtn = wrapper.find('[data-testid="editBtn"]')
    editBtn.vm.$emit('icon:clicked')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="editBtn"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="cancelBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submitBtn"]').exists()).toBe(true)
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
