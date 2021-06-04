<template lang="pug">
.fv-member-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.members.title', { accountName })"
    :searchLabel="$t('table.members.search')"
    tableComponent="fv-member-data-table"
    tableName="givenRoles"
    :rules="rules"
    @list:selected="memberSelected"
  )
</template>

<script>
export default {
  name: 'FvMemberList',
  data() {
    return {
      rules: {}
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
  },
  methods: {
    memberSelected(member) {
      this.$emit('list:selected', member)
    }
  }
}
</script>
