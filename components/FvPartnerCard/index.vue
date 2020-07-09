<template lang="pug">
  .fv-partner-card
    p {{ $options.name }}
    v-card
      v-list-item
        v-list-item-avatar
          v-img(:src="partner.avatar")
        v-card-text
          div {{ partner.name }}
          div {{ partner.address }}
          div {{ partner.city }} {{ partner.zip }}
          div(v-if="country") {{ country.name }} ({{ country.iso2 }})
          div(v-if="juridicalStatus") {{ juridicalStatus.name }} ({{ juridicalStatus.sigle }})
</template>

<script>
export default {
  name: 'FvPartnerCard',
  props: {
    partner: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    country() {
      if (!this.partner) return null
      const countryId = this.partner.country
      const res = this.$store.getters['countries/find'](countryId)
      return res
    },
    juridicalStatus() {
      if (!this.partner) return null
      const juridicalStatusId = this.partner.juridicalStatus
      const res = this.$store.getters['contracts/formesJuridiquesById'](
        juridicalStatusId
      )
      console.log('res: ', res)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contracts/getFormesJuridiques')
  }
}
</script>
<style lang="scss" scoped>
.fv-partner-card {
  background-color: inherit;
}
</style>
