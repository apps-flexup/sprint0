<template lang="pug">
.fv-readonly-field
  fv-text-field.text(
    v-model="checkValue ? checkValue : value"
    :style="cssVars"
    :label="label"
    :suffix="suffix"
    readonly
  )
</template>

<script>
export default {
  name: 'FvReadonlyField',
  props: {
    label: {
      type: String,
      default() {
        return null
      }
    },
    value: {
      type: [Number, String],
      default() {
        return null
      }
    },
    suffix: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    cssVars() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      const color = theme === 'light' ? 'black' : 'white'
      const bgColor = theme === 'light' ? '#E6E6E6' : '#1E1E1E'
      const res = {
        '--textColor': color,
        '--bgColor': bgColor
      }
      return res
    },
    checkValue() {
      return this.isTypeOfAccount()
    }
  },
  mounted() {
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    lowerCaseFirstLetter(str) {
      return str.charAt(0).toLowerCase() + str.slice(1)
    },
    isTypeOfAccount() {
      if (this.value === 'Personal' || this.value === 'Business' || this.value === 'SubAccount') {
        return this.$t(`account.${this.lowerCaseFirstLetter(this.value)}.name`)
      } else {
        return this.value
      }
    }
  }
}
</script>

<style scoped>
.text {
  color: var(--textColor) !important;
}
::v-deep .col {
  padding: 0 12px;
}
::v-deep .v-input__slot {
  background-color: var(--bgColor) !important;
}
.right-input >>> input {
  text-align: right;
}
</style>
