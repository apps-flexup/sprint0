<template lang="pug">
.fv-accounts-index
  v-row
    v-col.headBar(cols="12")
      v-col(cols="4")
        p.title title
      v-col(cols="8")
        fv-primary-button.text-right(
          @button:click="createAccount"
        ) {{ $t('buttons.create.account') }}
  v-row
    fv-account-card
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createAccount() {
      console.log('create account')
    }
  }
}
</script>

<style scoped>
.headBar {
  display: flex;
  align-items: center;
}
.title {
  font-weight: bold;
}
</style>
