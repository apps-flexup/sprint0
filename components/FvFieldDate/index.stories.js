import { storiesOf } from '@storybook/vue'
import { date, text } from '@storybook/addon-knobs'
import FvFieldDate from './index.vue'

function isoDateKnob(name, defaultValue, category) {
  const stringTimestamp = date(name, defaultValue, category)
  return new Date(stringTimestamp)
}
const minDate = new Date(2020, 8, 20)
const maxDate = new Date(2020, 9, 20)
storiesOf('Atoms/FvFieldDate', module).add('Common', () => ({
  props: {
    minDate: {
      default: isoDateKnob('minDate', minDate, 'Props')
    },
    maxDate: {
      default: isoDateKnob('maxDate', maxDate, 'Props')
    },
    label: {
      default: text('Label', 'Date label', 'Props')
    }
  },
  data() {
    return {
      selectedDate: null
    }
  },
  components: { FvFieldDate },
  methods: {
    dateChange(v) {
      this.selectedDate = v
    }
  },
  template: `<FvFieldDate
      :minDate="minDate.toISOString()"
      :maxDate="maxDate.toISOString()"
      :dateRef="selectedDate"
      :label="label"
      @date:changed="dateChange"
    >
    </FvFieldDate>`
}))
