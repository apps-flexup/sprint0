<template lang="pug">
  fv-message-index
</template>

<script>
export default {
  asyncComputed: {
    async getMessages() {
      return await this.$repos.messages.index()
    },
  },
}
</script>

<style scoped></style>
