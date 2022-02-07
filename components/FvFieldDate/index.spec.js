import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvFieldDate from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvFieldDate', () => {
  let store
  let vuetify
  const locale = 'fr'

  const factory = () => {
    return mount(FvFieldDate, {
      localVue,
      vuetify,
      store,
      computed: {
        locale: () => locale,
      },
    })
  }
  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          actions: {
            getSettings: jest.fn(),
          },
        },
      },
    })
  })
  it('should render a fv field date', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="textField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="menu"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="datePicker"]').exists()).toBe(false)
  })
  it('should display date picker when click on text field', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    textField.vm.$emit('click')
    expect(wrapper.vm.fromDateMenu).toBe(true)
  })
})
