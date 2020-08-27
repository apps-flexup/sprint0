import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import FvIcon from './index.vue'

const icon = {
  antenne: 'mdi-antenna',
  plus: 'mdi-plus',
  moins: 'mdi-minus',
  avion: 'mdi-airplane',
  fleche_up: 'mdi-arrow-up',
  bluetooth: 'mdi-bluetooth'
}
const defaultIcon = 'mdi-plus'
const color = {
  black: '#000000',
  red: 'red',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  purple: 'purple',
  white: '#ffffff'
}
const defaultColor = '#000000'

const size = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}
const defaultSize = 'medium'

storiesOf('Atoms/FvIcon', module).add('Common', () => ({
  props: {
    icon: {
      default: select('Icon', icon, defaultIcon, 'Props')
    },
    color: {
      default: select('Color', color, defaultColor, 'Props')
    },
    size: {
      default: select('Size', size, defaultSize, 'Props')
    }
  },
  components: { FvIcon },
  methods: {
    clicked: action('click')
  },
  template: `<FvIcon
    :icon="icon"
    :color="color"
    :size="size"
    @icon:clicked="clicked"
  >
  </FvIcon>`
}))
