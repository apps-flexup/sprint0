<template lang="pug">
  .nom-composant
    p {{ $options.name }}
    v-list
      v-list-item(
        v-for="item in items"
        :key="item.key"
      )
        v-list-item-content
          v-list-item-title.subtitle(v-to-locale="item.name")
          v-list-item-subtitle(v-partner="item.account_id")
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.$repos.offers.index().then((res) => (this.items = res))
  },
}
</script>
<style scoped>
.nom-composant {
  background-color: inherit;
}
</style>
