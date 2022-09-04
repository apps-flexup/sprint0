<template lang="pug">
.fv-account-readonly
  fv-readonly-field(
    :value="accountName"
    :label="label"
  )
</template>

<script>
export default {
  name: 'FvAccountReadonly',
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    accountName() {
      const account = this.$store.getters['accounts/findById'](this.value)
      if (!account) return ''
      const res = account.name
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
  }
}
</script>
