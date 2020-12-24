import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuex from 'vuex'
import FvForm from './index.vue'
import i18n from '~/.storybook/i18n'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

Vue.use(Vuex)

describe('FvForm', () => {
  let store
  const formStep = [
    {
      component: 'fv-product-step-detail',
      title: 'forms.product.step.0'
    }
  ]
  const factory = (propsData) => {
    return mount(FvForm, {
      i18n,
      store,
      router,
      localVue,
      stubs: {
        FvIcon: true,
        FvStepForm: true,
        FvSecondaryButton: true,
        FvPrimaryButton: true,
        FvProductStepDetail: true,
        FvOfferStepDetail: true
      },
      propsData: {
        form: 'products',
        action: 'new',
        ...propsData
      },
      computed: {
        getFormStep: () => formStep
      },
      mocks: {
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
            getOffer: jest.fn()
          }
        }
      }
    })
  })
  it('should render a stepForm', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="pageTitle"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="listProductStep"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="stepForm"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancelBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submitBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="stepComponent"]').exists()).toBe(true)
  })
  it('should send signal when clicked', () => {
    const wrapper = factory()
    const iconBack = wrapper.find('[data-testid="icon"]')
    iconBack.vm.$emit('icon:clicked')
    const submittedCalls = wrapper.emitted('clicked')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when clicked', () => {
    const wrapper = factory()
    const cancelBtn = wrapper.find('[data-testid="cancelBtn"]')
    cancelBtn.vm.$emit('button:click')
    const submittedCalls = wrapper.emitted('clicked')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when clicked in a form', () => {
    const wrapper = factory({ form: 'offers' })
    const submitBtn = wrapper.find('[data-testid="submitBtn"]')
    submitBtn.vm.$emit('button:click')
    const submittedCalls = wrapper.emitted('offers:add')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should props receive data from the payload', () => {
    const wrapper = factory({
      payload: {
        category_id: 13,
        name: 'Peinture métalisé',
        unit: 'cl',
        dimension: 'volume',
        status: 'draft',
        account_id: 1,
        id: 16
      }
    })

    const stepForm = wrapper.find('[data-testid="stepComponent"]')
    expect(stepForm.props().payload).toStrictEqual({
      category_id: 13,
      name: 'Peinture métalisé',
      unit: 'cl',
      dimension: 'volume',
      status: 'draft',
      account_id: 1,
      id: 16
    })
  })
})
