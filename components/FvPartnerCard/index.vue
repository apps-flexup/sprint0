<template lang="pug">
.fv-partner-card
  v-card(v-if="partner")
    v-list-item
      v-list-item-avatar
        // TODO Get flexup avatar in api endpoint
        v-img(
          :src="partner.avatar"
          :alt="`${partner.name}`"
        )
      v-card-text
        div {{ partner.name }}
        div {{ partner.address }}
        div {{ partner.city }} {{ partner.zip }}
        div(v-if="partner.country") {{ partner.country.name }} ({{ partner.country.iso2 }})
        div(v-if="partner.legalStructure") {{ partner.legalStructure.name }} ({{ partner.legalStructure.sigle }})
</template>

<script>
export default {
  name: 'FvPartnerCard',
  props: {
    partnerId: {
      type: Number,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      partner: null
    }
  },
  watch: {
    partnerId() {
      this.partner = this.$activeAccount.getPartner(this.partnerId)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('partners/get')
    this.partner = this.$activeAccount.getPartner(this.partnerId)
  }
}
</script>
<style scoped>
.fv-partner-card {
  background-color: inherit;
}
</style>
