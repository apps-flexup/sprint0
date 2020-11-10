<template lang="pug">
.fv-account-card
  v-card.rounded-lg(
    data-testid="card"
    :width="width"
    :height="height"
  )
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
      width: 300,
      height: 370,
      avatarSize: 128
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
