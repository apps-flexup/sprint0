<template lang="pug">
.fv-account-step-detail
  v-row
    v-col(cols='12')
      fv-text-field(
        data-testid='Account name'
        :value="name"
        :label="$t('forms.accounts.new.name')"
        @input="nameChanged"
      )
</template>

<script>
export default {
  name: 'FvAccountStepDetail',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    name() {
      const res = this.payload ? this.payload.name : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    nameChanged(name) {
      const payload = {
        name
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
