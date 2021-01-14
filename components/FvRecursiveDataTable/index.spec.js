import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import FvRecursiveDataTable from './index.vue'

const localVue = createLocalVue()
let vuetify

const factory = () => {
  return mount(FvRecursiveDataTable, {
    localVue,
    vuetify,
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvRecursiveDataTable', () => {
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('should render a fv recursive data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
})
