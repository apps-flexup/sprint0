<template lang="pug">
  .fv-partner-card
    h1 {{ partner }}
    v-card
      v-list-item
        v-list-item-avatar
          v-img(
            v-if="partner.avatar"
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
    partner: {
      type: Object,
      default() {
        return null
      }
    }
  },
  // computed: {
  //   partner() {
  //     const id = parseInt(this.partnerId)
  //     const res = this.$store.getters['accounts/findById'](id)
  //     console.log(this.$options.name, 'partner: ', res)
  //     return res
  //   }
  // },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-partner-card {
  background-color: inherit;
}
</style>
