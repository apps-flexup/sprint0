<template lang="pug">
.fv-nav-bar-slots-left
  component(
      :is="'fv-nav-bar-' + space"
      :space="space"
    )
      template(slot='gestion')
        v-list-item(
          v-for="(item, a) in navBar"
          :key="a"
          :to="item.to"
          router
        )
          v-btn(elevation='0' class='navBtn')
            | {{ $t(item.title) }}
      template(slot='search')
        p.mb-0 search bar navbar buyer here
</template>

<script>
export default {
  name: 'FvNavBarSlotsLeft',
  props: {
    space: {
      type: String,
      default() {
        return null
      }
    },
    navBar: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.navBtn {
  text-transform: initial;
  font-size: 0.95rem;
}
.fv-nav-bar-slots-left >>> div {
  display: flex;
}
.v-list-item {
  padding: 0;
  margin: 0 5px;
  min-height: initial;
}
a {
  padding: initial;
  border-radius: 10px;
  text-transform: initial;
}
</style>
