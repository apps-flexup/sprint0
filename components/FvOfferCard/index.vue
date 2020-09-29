<template lang="pug">
.fv-offer-card
  v-card.rounded-lg(
    :max-width="max_width"
    :height="370"
    :elevation="2"
  )
    v-img(
      :height='height_img'
      :width='max_width'
      :src="img"
    )
    fv-icon(
      icon='mdi-heart-outline'
      color='#ffffff'
      size='large'
      id='heart'
    )
    v-row(
      class='mx-4'
    )
      p.title {{ article }}
      div.prix
        // div(v-to-preferred-currency="{amount: price, currency: currency}")
        div.black--text {{ price }} €
        div.grey--text.ml-4 par unité

      div.rating
        fv-rating(
          :rating="rating"
          half-increments
          :dense="true"
          :readonly="true"
          :color="color"
        )
        div.grey--text.ml-3
          | {{ $tc('forms.offers.metrics.opinion', nbrAvis) }}
        div.button
          fv-icon(
            icon='mdi-magnify'
            id='look'
          )
          fv-icon.ml-2(
            icon='mdi-basket-outline'
            id='look'
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
    max_width: {
      type: Number,
      default() {
        return 285
      }
    },
    height_img: {
      type: Number,
      default() {
        return 250
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
.title {
  width: 100%;
  margin: 7px 0 3px 0;
  line-height: 1.5rem;
  font-size: 1.2rem !important;
}
.prix {
  width: 100%;
  display: flex;
}
.prix .black--text {
  font-size: 1.115rem;
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
}
#heart {
  position: absolute;
  top: 2%;
  right: 3%;
}
.v-card:hover >>> #look {
  opacity: 1;
  visibility: visible;
  transition: 0.3s;
}
</style>
