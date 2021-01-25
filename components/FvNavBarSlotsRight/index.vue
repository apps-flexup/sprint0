<template lang="pug">
.fv-nav-bar-slots-right
  component(
      :is="'fv-nav-bar-' + space"
      :space="space"
    )
      template(slot='button')
        v-btn(elevation="0" class="navBtn")
          | button
      template(slot='icon')
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
          icon: 'mdi-map-marker-outline',
          to: '/adresses'
        },
        {
          icon: 'mdi-heart-outline',
          to: '/favorite'
        },
        {
          icon: 'mdi-basket-outline',
          to: '/'
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
.navBtn {
  margin: 0 16px;
  border: grey solid 1px;
  border-radius: 10px;
  color: grey;
}
</style>
