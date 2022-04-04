<template lang="pug">
.fv-message-index
  fv-header-index(
    :title="$t('table.messages.title')"
    :canCreate="false"
  )
  fv-message-list
</template>

<script>
export default {
  name: 'FvMessageIndex',
}
</script>

<style scoped></style>
