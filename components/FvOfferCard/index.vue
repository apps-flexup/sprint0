<template lang="pug">
.fv-offer-card
  v-card.rounded-lg(
    :max-width="max_width"
    :height="height_card"
  )
    v-img(
      :height='height_img'
      :width='max_width'
      :src="img"
    )
    v-card-title
      div Nom de larticle
    v-row(
      align="center"
      class="mx-3"
    )
      v-rating(
        :value="4"
        :dense="true"
        :readonly="true"
        size="16"
      )
      div.grey--text.ml-4 3 avis
</template>

<script>
export default {
  name: 'FvOfferCard',
  props: {
    img: {
      type: String,
      default() {
        return 'https://lemagduchat.ouest-france.fr/images/dossiers/2020-02/chat-sauvage-064614.jpg'
      }
    },
    max_width: {
      type: Number,
      default() {
        return 300
      }
    },
    height_img: {
      type: Number,
      default() {
        return 250
      }
    },
    height_card: {
      type: Number,
      default() {
        return 350
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('offers/getAll')
  }
}
</script>
