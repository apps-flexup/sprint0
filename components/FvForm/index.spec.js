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
  const productStep = [
    {
      component: 'fv-product-step-detail',
      title: 'forms.product.step.0'
    }
  ]
  const factory = () => {
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
        FvProductStepDetail: true
      },
      propsData: {
        action: 'new'
      },
      computed: {
        getFormStep: () => productStep
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
            getProduct: jest.fn()
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
  it('should send signal when clicked', () => {
    const wrapper = factory()
    const submitBtn = wrapper.find('[data-testid="submitBtn"]')
    submitBtn.vm.$emit('button:click')
    const submittedCalls = wrapper.emitted('')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
})
