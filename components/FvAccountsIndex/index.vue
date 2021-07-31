<template lang="pug">
.fv-accounts-index
  v-row
    v-col.headBar(cols="12")
      v-col(cols="4")
        p.title(
          data-testid="title"
        ) {{ $t(`${accountType}.index.title`) }}
      v-col(cols="8")
        fv-primary-button.text-right(
          data-testid="createButton"
          @button:click="createAccount"
        ) {{ $t(`buttons.create.account`) }}
  v-row(
    class="d-flex flex-row"
    data-testid="accountList"
  )
    div(
      v-for="account in accounts"
      :key="account.id"
    )
      fv-account-card.card(
        data-testid="accountCard"
        :id="account.id"
        :avatar="account.avatar"
        :name="account.name"
      )
</template>

<script>
export default {
  props: {
    accountType: {
      type: String,
      default() {
        return 'accounts'
      }
    }
  },
  computed: {
    accounts() {
      if (this.accountType === 'subAccounts') {
        return this.findOwnersOfSubAccount
      }
      const res = this.$store.getters['accounts/all']
      return res
    }
  },
  asyncComputed: {
    findOwnersOfSubAccount() {
      const accountId = this.$activeAccount.get()
      this.$repos.givenRoles.index().then((data) => {
        const res = []
        data.forEach((givenRole) => {
          if (accountId === givenRole.to_id && givenRole.role === 'owner') {
            const subAccount = this.$store.getters['accounts/findById'](
              givenRole.from_id
            )
            res.push(subAccount)
          }
        })
        return res
      })
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('owners/get')
  },
  methods: {
    createAccount() {
      this.$router.push('/accounts/new')
      this.$emit('accounts:create')
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
.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
