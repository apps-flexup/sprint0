<template lang="pug">
.fv-member-list
  fv-index-table(
    data-testid="table"
    :searchLabel="$t('table.members.search')"
    tableComponent="fv-member-data-table"
    tableName="members"
    :rules="rules"
    @list:selected="memberSelected"
  )
</template>

<script>
export default {
  name: 'FvMemberList',
  data() {
    return {
      rules: {
        to_id: this.$displayRules.memberName,
        role: this.$displayRules.role,
      },
    }
  },
  mounted() {
    this.$store.dispatch('members/get')
  },
  methods: {
    memberSelected(member) {
      this.$emit('list:selected', member)
    },
  },
}
</script>
