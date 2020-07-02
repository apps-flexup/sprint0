<template lang="pug">
  .page-account-new
    p {{ $options.name }}
    v-card(
      max-width="800px"
      justify-center
    )
      v-card-title {{ $t('accounts.new.title') }}
      v-card-text
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
      v-card-actions
        v-spacer
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
