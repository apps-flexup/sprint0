<template lang="pug">
.fv-account-list
  v-row(
    class="d-flex flex-row"
    data-testid="accountList"
  )
    div(
      v-for="account in accounts"
      :key="account.id"
    )
      fv-account-card.card(
        data-testid="accountCard"
        :id="account.id"
        :avatar="account.avatar"
        :name="account.name"
        :type="account.type"
      )
</template>

<script>
export default {
  props: {
    accounts: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
