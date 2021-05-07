<template lang="pug">
  .page-product-new
    fv-form(
      :payload='account'
      @form:submit="createAccount"
      url='accounts'
      form='accounts'
      action='new'
    )
</template>

<script>
export default {
  data() {
    return {
      account: {
        name: null,
        title: null,
        lastname: null,
        firstname: null,
        email: null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createAccount(payload) {
      this.$store.dispatch('accounts/add', payload)
    }
  }
}
</script>
