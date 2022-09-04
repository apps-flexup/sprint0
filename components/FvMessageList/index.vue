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
  computed: {
    messages() {
      return this.$store.getters['messages/to']
    }
  },
  mounted() {
    this.$store.dispatch('messages/to')
  }
}
</script>
