<template lang="pug">
.fv-slot-item-card
  v-card.rounded-lg(
    data-testid="card"
    :width="cardWidth"
    :height="cardHeight"
    :elevation="2"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  )
    div.clickCard(
      data-testid="cardDiv"
      @click="cardClicked"
    )
    fv-icon.favorite(
      data-testid="favoriteIcon"
      icon='mdi-heart-outline'
      :color="favoriteIconColor"
      size='large'
      @icon:clicked='favoriteClicked'
    )
    slot(
      data-testid="defaultSlot"
    )
</template>

<script>
export default {
  name: 'FvSlotItemCard',
  props: {
    cardWidth: {
      type: Number,
      default() {
        return 300
      },
    },
    cardHeight: {
      type: Number,
      default() {
        return 370
      },
    },
    favoriteIconColor: {
      type: String,
      default() {
        return 'black'
      },
    },
  },
  methods: {
    cardClicked() {
      this.$emit('card:clicked')
    },
    favoriteClicked() {
      this.$emit('favorite:clicked')
    },
    mouseover() {
      this.$emit('card:mouseover', true)
    },
    mouseleave() {
      this.$emit('card:mouseover', false)
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: 0.5s;
}
.v-card:hover {
  transition: 0.5s;
  box-shadow: 0px 3px 20px -3px !important;
}
.favorite {
  position: absolute;
  top: 2%;
  right: 3%;
  z-index: 2;
}
.clickCard {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
