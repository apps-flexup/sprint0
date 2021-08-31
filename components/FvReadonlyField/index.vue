<template lang="pug">
.fv-readonly-field
  v-row(:style="cssVars")
    v-col(cols="12")
      fv-text-field.text(
        :label="label"
        :regular="true"
        :outlined="false"
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
    },
    readonly: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  computed: {
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
        this.value === 'SubAccount'
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
::v-deep .col {
  padding: 0 12px;
}
</style>
