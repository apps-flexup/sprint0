<template lang="pug">
.fv-member-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.members.title', { accountName })"
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
        to_id: this.$displayRules.userNameFromUuid,
        role: this.$displayRules.role
      }
    }
  },
  computed: {
    accountName() {
      const activeAccountId = this.$activeAccount.get()
      const account = this.$store.getters['accounts/findById'](activeAccountId)
      const res = account ? account.name : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('members/get')
  },
  methods: {
    memberSelected(member) {
      this.$emit('list:selected', member)
    }
  }
}
</script>
