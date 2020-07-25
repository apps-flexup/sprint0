<template lang="pug">
  .team-list.d-flex.flex-wrap.align-content-space-around
    fv-contact-card.align-self-stretch.ma-2(
      v-for="item in items"
      :key="item.id"
      :contact="item"
    )
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$repos.team.index().then((res) => {
      this.items = res
    })
  }
}
</script>

<style>
.team-list {
  max-width: 900px;
}
</style>
