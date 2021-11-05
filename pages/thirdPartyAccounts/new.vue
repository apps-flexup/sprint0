<template lang="pug">
.page.third-party-account-new
  h3 Ajouter depuis l'annuaire flexup
  fv-autocomplete(
    data-testid='autocomplete'
    :items="items"
    :filter="filter"
    @autocomplete:selected="addThirdParty"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.thirdPartyAccount') }}
    template(v-slot:item="data")
      template(v-if="data.item")
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          v-row.align-center.mr-5.ml-2
            h3 {{ data.item.name }}
            div.ml-5.font-weight-thin {{ $displayRules.accountType(data.item)}}
            v-spacer
            fv-primary-button(
              @button:click="addThirdParty(data.item.id)"
            ) On ajoute !
    template(v-slot:selection="data")
      template(v-if="data.item")
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          div {{ data.item.name }}

  h3 Ajouter un tiers localement
  fv-text-button(
      data-testid="addNewLocalThirdParty"
      @button:click="addNewLocalThirdParty"
    )
      template(v-slot:icon)
        fv-icon(
          size="small"
          icon="mdi-plus"
          color="#1976d2"
          @icon:clicked="addNewLocalThirdParty"
        )
      template(v-slot:text)
        | {{ $t('forms.thirdPartyAccounts.new.title') }}
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.$repos.accounts.index().then((accounts) => {
      const activeAccountId = this.$activeAccount.get()
      accounts = accounts.filter((account) => account.id !== activeAccountId)
      this.items = accounts
    })
  },
  methods: {
    addThirdParty(id) {
      this.$store.dispatch('thirdPartyAccounts/addFlexupAccount', id)
    },
    addNewLocalThirdParty() {
      this.$router.push('/thirdPartyAccounts/newLocalThirdParty')
    }
  }
}
</script>
