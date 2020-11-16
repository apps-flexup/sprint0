<template lang="pug">
.fv-account-card
  fv-slot-item-card(
    data-testid="card"
    @card:clicked="cardClicked"
    @favorite:clicked="favoriteClicked"
  )
    template(v-slot:default)
      v-card-title.justify-center
        fv-avatar(
          data-testid="avatar"
          :avatar="avatar"
          :size="avatarSize"
        )
      v-card-title.justify-center(
        data-testid="name"
      ) {{ name }}
</template>

<script>
export default {
  name: 'FvAccountCard',
  props: {
    avatar: {
      type: String,
      default() {
        return null
      }
    },
    name: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      avatarSize: 128
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    cardClicked() {
      this.$emit('accountCard:clicked')
    },
    favoriteClicked() {
      this.$emit('accountCard:favorite')
    }
  }
}
</script>
