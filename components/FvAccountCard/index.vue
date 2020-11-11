<template lang="pug">
.fv-account-card
  fv-slot-item-card(
    data-testid="card"
    @card:clicked="cardClicked"
    @like:clicked="likeClicked"
  )
    template(v-slot:default)
      v-card-title.justify-center
        fv-avatar(
          data-testid="avatar"
          :avatar="avatar"
          :size="avatarSize"
        )
      v-card-title.justify-center(
        data-testid="accountName"
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
    likeClicked() {
      this.$emit('accountCard:liked')
    }
  }
}
</script>
