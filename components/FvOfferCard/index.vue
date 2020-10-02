<template lang="pug">
.fv-offer-card
  v-card.rounded-lg(
    :width="width"
    :height="height"
    :elevation="2"
  )
    div.clickCard(
      @click="clickedCard"
    )
    v-img(
      :height='height_img'
      :width='width'
      :src="img"
    )
    fv-icon(
      icon='mdi-heart-outline'
      color='#ffffff'
      size='large'
      id='heart'
      @icon:clicked='clickedHeart'
    )
    v-row(
      class='mx-4'
    )
      p.title {{ article }}
      div.prix
        div(v-to-preferred-currency="{amount: price, currency: preferredCurrency}")
        // div.mx-1 /
        div.ml-2(v-to-unit="{ unit: unit, dimension: dimension}" id='unit')
      div.rating
        fv-rating(
          :rating="rating"
          half-increments
          :dense="true"
          :readonly="true"
        )
        div.grey--text.ml-3
          | {{ $tc('forms.offers.metrics.opinion', nbrAvis) }}
        div.button
          fv-icon(
            icon='mdi-magnify'
            id='look'
            @icon:clicked='clickedLook'
          )
          fv-icon.ml-2(
            icon='mdi-basket-outline'
            id='look'
            @icon:clicked='clickedShop'
          )
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
    width: {
      type: Number,
      default() {
        return 300
      }
    },
    height_img: {
      type: Number,
      default() {
        return 260
      }
    },
    height: {
      type: Number,
      default() {
        return 370
      }
    },
    rating: {
      type: Number,
      default() {
        return null
      }
    },
    article: {
      type: String,
      default() {
        return null
      }
    },
    price: {
      type: Number,
      default() {
        return null
      }
    },
    nbrAvis: {
      type: Number,
      default() {
        return null
      }
    },
    unit: {
      type: String,
      default() {
        return null
      }
    },
    dimension: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    preferredCurrency() {
      const res = this.$store.getters['accounts/preferredCurrency']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('offers/get')
    this.$store.dispatch('accounts/get')
  },
  methods: {
    clickedCard() {
      this.$emit('offerCard:clicked')
    },
    clickedHeart() {
      this.$emit('iconHeart:clicked')
    },
    clickedLook() {
      this.$emit('iconLook:clicked')
    },
    clickedShop() {
      this.$emit('iconShop:clicked')
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  margin: 7px 0 0 0;
  line-height: 1.5rem;
  font-size: 1.18rem !important;
}
.prix {
  width: 100%;
  display: flex;
  font-size: 1.1rem;
  align-items: center;
}
.rating {
  display: flex;
  position: absolute;
  bottom: 2%;
  width: 70%;
  align-items: center;
}
.button {
  position: absolute;
  display: flex;
  left: 100%;
}
#unit {
  font-size: 0.9rem;
}
.v-card:hover {
  transition: 0.5s;
  box-shadow: 0px 3px 20px -3px !important;
}
.v-card {
  transition: 0.5s;
}
#look {
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 2;
}
#heart {
  position: absolute;
  top: 2%;
  right: 3%;
  z-index: 2;
}
.v-card:hover >>> #look {
  opacity: 1;
  visibility: visible;
  transition: 0.3s;
}
.clickCard {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
