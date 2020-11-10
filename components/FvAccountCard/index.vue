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
        avatar="/images/avatar-0.png"
        :size="avatarSize"
      )
    v-card-title.justify-center(
      data-testid="accountName"
    ) Simone Weil
</template>

<script>
export default {
  name: 'FvAccountCard',
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
