<template lang="pug">
.fv-offer-card
  v-card.rounded-lg(
    :max-width="max_width"
    :height="height_card"
    :elevation="4"
  )
    v-img(
      :height='height_img'
      :width='max_width'
      :src="img"
    )
    v-card-title
      div {{ article }}
    v-row(
      align='center'
      class='mx-3'
      id='prix'
    )
      div.black--text {{ price }} €
      div.grey--text.ml-4 par unité
    v-row(
      align='center'
      class='mx-4'
    )
      fv-rating(
        :rating="rating"
        half-increments
        :dense="true"
        :readonly="true"
        :color="color"
      )
      div.grey--text.ml-4 {{nbrAvis}} avis
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
    },
    rating: {
      type: Number,
      default() {
        return 4.5
      }
    },
    article: {
      type: String,
      default() {
        return 'Un chat'
      }
    },
    price: {
      type: Number,
      default() {
        return 15
      }
    },
    nbrAvis: {
      type: Number,
      default() {
        return 3
      }
    },
    color: {
      type: String,
      default() {
        return 'primary'
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('offers/getAll')
  }
}
</script>

<style scoped>
.v-card__title {
  padding: 5px 0 0 15px;
}
#prix {
  padding-bottom: 7px;
}
#prix .black--text {
  font-size: 1.165rem;
}
</style>
