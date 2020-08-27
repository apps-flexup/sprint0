import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import FvIcon from './index.vue'

const icons = {
  heart: 'mdi-heart-outline',
  localisation: 'mdi-map-marker-outline',
  help: 'mdi-help-circle-outline',
  padlock: 'mdi-lock',
  eye: 'mdi-eye-outline',
  credit_card: 'mdi-credit-card-multiple-outline',
  plus: 'mdi-plus',
  document: 'mdi-file-document-multiple-outline',
  trash: 'mdi-delete',
  clock: 'mdi-clock-time-four-outline',
  writing: 'mdi-pencil-box-multiple-outline',
  validate: 'mdi-check',
  shop: 'mdi-basket-outline',
  truck: 'mdi-truck-fast-outline',
  calendar: 'mdi-calendar-month-outline',
  search: 'mdi-magnify',
  network: 'mdi-wan',
  account: 'mdi-account-circle-outline',
  social: 'mdi-account-group-outline',
  preference: 'mdi-tune-vertical-variant',
  mail: 'mdi-email-outline',
  logout: 'mdi-logout-variant',
  choice: 'mdi-apps',
  left_arrow: 'mdi-chevron-left',
  menu_burger: 'mdi-menu',
  close: 'mdi-close',
  menu_point: 'mdi-dots-horizontal',
  home: 'mdi-home-outline',
  bank: 'mdi-bank-outline',
  star: 'mdi-star-outline',
  numero: 'mdi-numeric-1-circle-outline',
  check_circle: 'mdi-check-circle-outline',
  switch: 'mdi-toggle-switch',
  order: 'mdi-inbox-arrow-down-outline',
  settings: 'mdi-cog'
}
const defaultIcon = 'mdi-plus'
const iconsNames = Object.keys(icons)
const colors = {
  black: '#000000',
  red: 'red',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  purple: 'purple',
  white: '#ffffff'
}
const defaultColor = '#000000'

const sizes = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}
const defaultSize = 'medium'

storiesOf('Atoms/FvIcon', module)
  .add('Common', () => ({
    props: {
      icon: {
        default: select('Icon', icons, defaultIcon, 'Props')
      },
      color: {
        default: select('Color', colors, defaultColor, 'Props')
      },
      size: {
        default: select('Size', sizes, defaultSize, 'Props')
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
      @icons:clicked="clicked"
    >
    </FvIcon>`
  }))
  .add('Available icons', () => ({
    components: { FvIcon },
    data() {
      return {
        iconsNames,
        icons
      }
    },
    template: `<div :style="{display: 'flex', flexWrap: 'wrap'}">
      <div
          v-for="icon in icons"
          :key="icon"
          :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '.5rem',flex: '0 0 50px', height: '120px', font: '300 12px Raleway'}">
        <FvIcon :icons="icon" :style="{margin: '0 0 8px 0'}"/>
      <div
        <span :style="{textOverflow: 'ellipsis', whiteSpace: 'nowrap',overflow: 'hidden', width: '70px', textAlign: 'center'}">{{ icon.slice(4) }}</span>
      </div>
    </div>`
  }))
