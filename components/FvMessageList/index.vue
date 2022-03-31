<template lang="pug">
.fv-message-list
  fv-index-table(
    :searchLabel="$t('table.messages.search')"
    tableComponent="fv-messages-data-table"
    tableName="messages"
  )
</template>

<script>
export default {
  name: 'FvMessageList',
  mounted() {
    this.$store.dispatch('messages/get')
  },
}
</script>

<style scoped>

</style>
