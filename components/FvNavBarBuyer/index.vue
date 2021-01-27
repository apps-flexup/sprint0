<template lang="pug">
.fv-nav-bar-buyer
  fv-nav-bar(
    :title='title'
    :space="space"
  )
    template(slot='left')
      fv-search-autocomplete
    template(slot='right')
      div(class='icons')
        v-list-item(
          v-for="(item, a) in icons"
          :key="a"
          :to="item.to"
        )
          v-icon(size='25') {{ item.icon }}
</template>

<script>
export default {
  name: 'FvNavBarBuyer',
  props: {
    space: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      icons: [
        {
          icon: 'mdi-map-marker-outline',
          to: '/adresses'
        },
        {
          icon: 'mdi-heart-outline',
          to: '/favorite'
        },
        {
          icon: 'mdi-basket-outline',
          to: '/shop'
        }
      ],
      title: 'Flexup - Sprint 0'
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.icons {
  display: flex;
  justify-content: flex-end;
  flex: initial;
}
</style>
