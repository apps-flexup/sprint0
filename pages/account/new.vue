<template lang="pug">
  .page-account-new.text-md-center
    p {{ $options.name }}
    h1 {{ $t('accounts.new.title') }}
    v-row
      v-col(cols="12")
        v-text-field(
          label="Nom du compte"
        )
    v-row
      v-col(cols="2")
        v-text-field(
          label="Titre"
        )
      v-col(cols="5")
        v-text-field(
          label="Nom"
        )
      v-col(cols="5")
        v-text-field(
          label="Prénom"
        )
    v-row
      v-col(cols="6")
        v-text-field(
          label="Email"
        )
      v-col(cols="6")
        pre Chargement image avatar
    v-row
      v-btn(@click.stop="createAccount" block='') {{ $t('buttons.submit') }}
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createAccount() {
      console.log('créer nouveau compte')
      this.$router.push('/products/new')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-account-new {
  background-color: inherit;
}
</style>
