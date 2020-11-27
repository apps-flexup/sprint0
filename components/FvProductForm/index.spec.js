import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuex from 'vuex'
import FvProductForm from './index.vue'
import i18n from '~/.storybook/i18n'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

Vue.use(Vuex)

describe('FvProductForm', () => {
  let store
  const productStep = [
    {
      component: 'fv-product-step-detail',
      title: 'forms.product.step.0'
    }
  ]
  const factory = () => {
    return mount(FvProductForm, {
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
        getProductStep: () => productStep
      },
      mocks: {
        $nuxt: {
          $loading: {
            start: () => {},
            finish: () => {}
          }
        },
        $activeAccount: {
          addProduct: () => {}
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
    const cancelBtn = wrapper.find('[data-testid="cancelBtn"]')
    const submitBtn = wrapper.find('[data-testid="submitBtn"]')
    iconBack.vm.$emit('icon:clicked')
    cancelBtn.vm.$emit('button:click')
    submitBtn.vm.$emit('button:click')
    const submittedCalls = wrapper.emitted('clicked')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(3)
  })
  it('should show the title of new product', () => {
    const wrapper = factory()
    const title = wrapper.find('[data-testid="pageTitle"]')
    expect(title.text()).toBe('Nouveau produit')
  })
  it('should show the title of edit product', () => {
    const wrapper = mount(FvProductForm, {
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
      computed: {
        getProductStep: () => productStep
      },
      propsData: {
        action: 'edit'
      }
    })
    const title = wrapper.find('[data-testid="pageTitle"]')
    expect(title.text()).toBe('Modifier mon produit')
  })
})
