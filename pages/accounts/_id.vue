<template lang="pug">
.accounts-id
  v-tabs(
    icons-and-text
  )
    v-tab {{ $t('pages.accounts._id.general') }}
      v-icon.mb-3 {{ 'mdi-card-account-details-outline' }}
    v-tab(v-if="isActiveAccount && accountType === 'SubAccount'") {{ $t('pages.accounts._id.owners') }}
      v-icon.mb-3 {{ 'mdi-account-tie-outline' }}
    v-tab(v-if="isActiveAccount && subAccounts && subAccounts.length > 0") {{ $t('pages.accounts._id.subAccounts.tabName') }}
      v-icon.mb-3 {{ 'mdi-account-network-outline' }}
    v-tab-item
      fv-form.mt-5(
        :payload='account'
        @form:submit="editAccount"
        url='accounts'
        :form='formForAccountType'
        action="read"
        :allowEdit="isActiveAccount"
      )
    v-tab-item(v-if="accountType === 'SubAccount'")
      fv-index-table.mt-5(
        :title="$t('table.owners.title', { accountName })"
        :searchLabel="$t('table.owners.search')"
        tableComponent="fv-owner-data-table"
        tableName="owners"
        :rules="rules"
      )
    v-tab-item
      v-row
        v-col.headBar(cols="12")
          v-col(cols="4")
            p.title(
              data-testid="title"
            ) {{ $t('pages.accounts._id.subAccounts.title') }}
      fv-account-list(
        :accounts="subAccounts"
      )
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      accountId: parseInt(this.$route.params.id),
      tab: null,
      rules: {
        to_id: this.$displayRules.ownerName,
        to_type: () => {
          return ''
        },
        from_type: () => {
          return ''
        },
        role: () => {
          return ''
        },
        status: () => {
          return ''
        }
      }
    }
  },
  computed: {
    accountName() {
      return this.account.name
    },
    accountType() {
      const account = this.account
      return account ? account.type : 'PersonalAccount'
    },
    formForAccountType() {
      const account = this.account
      if (!this.account) return 'PersonalAccount'
      const type = account.type.toLowerCase()
      const res =
        account.type === 'SubAccount' ? 'subAccounts' : `${type}Accounts`
      return res
    },
    isActiveAccount() {
      return this.accountId === this.$activeAccount.get()
    }
  },
  asyncComputed: {
    async account() {
      let res
      if (this.isActiveAccount) {
        res = this.$store.getters['accounts/findById'](this.accountId)
      } else {
        res = await this.$directory.getAccountById(this.accountId)
      }
      return res
    },
    async subAccounts() {
      const accountId = this.accountId
      const givenRoles = await this.$repos.givenRoles.index()
      const res = []
      givenRoles.forEach(async (givenRole) => {
        if (givenRole.to_id === accountId && givenRole.role === 'owner') {
          const account = await this.$directory.getAccountById(
            givenRole.from_id
          )
          res.push(account)
        }
      })
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('members/get')
    this.$store.dispatch('owners/get')
  },
  methods: {
    editAccount(payload) {
      this.$store.dispatch('accounts/update', payload)
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
