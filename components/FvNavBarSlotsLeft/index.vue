<template lang="pug">
.fv-nav-bar-slots-left
  component(
      :is="'fv-nav-bar-' + space"
      :space="space"
    )
      template(slot='gestion')
        v-btn(elevation='0')
          | {{ $t('navBar.'+space+'.0') }}
        v-btn(elevation='0')
          | {{$t('navBar.'+space+'.1')}}
        v-btn(elevation='0')
          | {{$t('navBar.'+space+'.2')}}
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
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.navBtn {
  position: absolute;
  left: 70%;
  top: 25%;
}
</style>
