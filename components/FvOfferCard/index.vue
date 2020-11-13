<template lang="pug">
.fv-offer-card
  fv-slot-item-card(
    data-testid="card"
    favoriteIconColor="#FFFFFF"
    @card:clicked="cardClicked"
    @favorite:clicked="favoriteClicked"
    @card:mouseover="mouseoverChanged"
  )
    template(v-slot:default)
      v-img(
        data-testid="img"
        :height='heightImg'
        width='100%'
        :src="img"
      )
      v-row(
        class='mx-4'
      )
        p.title(
          data-testid="name"
        ) {{ article }}
        div.prix(
          data-testid="price"
        )
          div(v-to-preferred-currency="{amount: price, currency: currency}")
          div.ml-2(v-to-unit="{ unit: unit, dimension: dimension}" id='unit')
        div.rating(
          data-testid="rating"
        )
          fv-rating(
            :rating="rating"
            half-increments
            :dense="true"
            :readonly="true"
          )
          div.grey--text.ml-3
            | {{ $tc('forms.offers.metrics.opinion', nbrAvis) }}
          div.actions(
            v-if="over"
          )
            fv-icon(
              data-testid="detailsIcon"
              icon='mdi-magnify'
              @icon:clicked='detailsClicked'
            )
            fv-icon.ml-2(
              data-testid="buyIcon"
              icon='mdi-basket-outline'
              @icon:clicked='buyClicked'
            )
</template>

<script>
export default {
  name: 'FvOfferCard',
  props: {
    img: {
      type: String,
      default() {
        return null
      }
    },
    heightImg: {
      type: Number,
      default() {
        return 260
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
    currency: {
      type: String,
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
  data() {
    return {
      over: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    mouseoverChanged(over) {
      this.over = over
    },
    cardClicked() {
      console.log('on lcick on click ')
      this.$emit('offerCard:clicked')
    },
    favoriteClicked() {
      console.log('on lcick on click LOIKE')
      this.$emit('offerCard:favoriteClicked')
    },
    detailsClicked() {
      console.log('on lcick on DETRAILS ')
      this.$emit('offerCard:detailsClicked')
    },
    buyClicked() {
      console.log('on lcick on SHOP')
      this.$emit('offerCard:buyClicked')
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
.actions {
  position: absolute;
  display: flex;
  left: 100%;
  z-index: 2;
}
#unit {
  font-size: 0.85rem;
  opacity: 0.7;
}
</style>
