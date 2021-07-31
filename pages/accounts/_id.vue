<template lang="pug">
.accounts-id
  v-tabs(
    icons-and-text
  )
    v-tab {{ $t('pages.accounts._id.general') }}
      v-icon.mb-3 {{ 'mdi-card-account-details-outline' }}
    v-tab(v-if="accountType === 'SubAccount'") {{ $t('pages.accounts._id.owners') }}
      v-icon.mb-3 {{ 'mdi-account-tie-outline' }}
    v-tab(v-if="true") {{ $t('pages.accounts._id.subAccounts') }}
      v-icon.mb-3 {{ 'mdi-account-network-outline' }}
    v-tab-item
      fv-form.mt-5(
        :payload='account'
        @form:submit="editAccount"
        url='accounts'
        :form='formForAccountType'
        action="read"
      )
    v-tab-item(v-if="accountType === 'SubAccount'")
      fv-index-table.mt-5(
        :title="$t('table.owners.title', { accountName })"
        :searchLabel="$t('table.owners.search')"
        tableComponent="fv-owner-data-table"
        tableName="owners"
        :rules="rules"
      )
    v-tab-item()
      fv-accounts-index(
        accountType="subAccounts"
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
      accountId: this.$route.params.id,
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
    account() {
      const res = this.$store.getters['accounts/findById'](this.accountId)
      return res
    },
    accountName() {
      return this.account.name
    },
    accountType() {
      const account = this.account
      const type = account.type
      return type
    },
    formForAccountType() {
      const account = this.account
      const type = account.type.toLowerCase()
      const res =
        account.type === 'SubAccount' ? 'subAccounts' : `${type}Accounts`
      return res
    }
  },
  asyncComputed: {
    isOwner() {
      const accountId = this.$activeAccount.get()
      let condition = false
      this.$repos.givenRoles.index().then((data) => {
        data.forEach((givenRole) => {
          if (accountId === givenRole.to_id && givenRole.role === 'owner') {
            condition = true
            return condition
          }
        })
        return condition
      })
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
