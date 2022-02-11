import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvRecursiveDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

const factory = () => {
  return shallowMount(FvRecursiveDataTable, {
    localVue,
    store,
    vuetify,
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvRecursiveDataTable', () => {
  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          actions: {
            getSettings: jest.fn(),
          },
          getters: {
            settings() {
              return {
                theme: 'light',
              }
            },
          },
        },
      },
    })
  })
  it('should render a fv recursive data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBeTruthy()
  })
})
