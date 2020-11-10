<template lang="pug">
.fv-slot-item-card
  v-card.rounded-lg(
    data-testid="card"
    :width="cardWidth"
    :height="cardHeight"
    :elevation="2"
  )
    div.clickCard(
      data-testid="cardDiv"
      @click="cardClicked"
    )
    fv-icon.like(
      data-testid="likeIcon"
      icon='mdi-heart-outline'
      :color="likeColor"
      size='large'
      @icon:clicked='likeClicked'
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
      }
    },
    cardHeight: {
      type: Number,
      default() {
        return 370
      }
    },
    likeColor: {
      type: String,
      default() {
        return 'black'
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    cardClicked() {
      this.$emit('card:clicked')
    },
    likeClicked() {
      this.$emit('like:clicked')
    }
  }
}
</script>

<style scoped>
.v-card:hover {
  transition: 0.5s;
  box-shadow: 0px 3px 20px -3px !important;
}
.like {
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
