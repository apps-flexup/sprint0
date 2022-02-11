<template lang="pug">
.fv-member-name-display
  div {{ accountName }}
</template>

<script>
export default {
  name: 'FvMemberNameDisplay',
  props: {
    role: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  asyncComputed: {
    async accountName() {
      const res = await this.$displayRules.memberName(this.role)
      return res
    },
  },
}
</script>
