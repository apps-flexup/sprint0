<template lang="pug">
.fv-nav-bar-slots-right
  component(
      :is="'fv-nav-bar-' + space"
      :space="space"
    )
      template(slot='button')
        v-btn()
          | button
      template(slot='icon')
        div(class='icons')
          v-list-item(
            v-for="(item, a) in icons"
            :key="a"
          )
            v-list-item-action
              v-icon(size='25') {{ item.icon }}
</template>

<script>
export default {
  name: 'FvNavBarSlotsRight',
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
          icon: 'mdi-map-marker-outline'
        },
        {
          icon: 'mdi-heart-outline'
        },
        {
          icon: 'mdi-basket-outline'
        }
      ]
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
}
.v-list-item {
  padding: initial;
}
</style>
