<template lang="pug">
.fv-readonly-field
  v-row(:style="cssVars")
    v-col(cols="12")
      fv-text-field.text(
        :label="label"
        v-model="checkValue ? checkValue : value"
        :clearable="false"
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
      type: String,
      default() {
        return null
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
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    lowerCaseFirstLetter(str) {
      return str.charAt(0).toLowerCase() + str.slice(1)
    },
    isTypeOfAccount() {
      if (
        this.value === 'Personal' ||
        this.value === 'Business' ||
        this.value === 'SubAccounts'
      ) {
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
</style>
