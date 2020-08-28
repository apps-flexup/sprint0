import { date } from '@storybook/addon-knobs'

export function isoDateKnob(name, defaultValue, category) {
  const stringTimestamp = date(name, defaultValue, category)
  return new Date(stringTimestamp)
}
