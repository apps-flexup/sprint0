<template lang="pug">
.fv-sub-menu
    v-list
      i.category(v-text="$t('category.' + categoryName)")
      v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          fv-title-menu(
            :categoryName='categoryName'
            :menuName='menuName'
          )
        fv-find-menu(
          :menuName='menuName'
        )
      hr.line
</template>

<script>
export default {
  name: 'FvSubMenu',
  props: {
    categoryName: {
      type: String,
      default() {
        return null
      }
    },
    menuName: {
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
.title {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.15rem !important;
}
.line {
  width: 92%;
  float: right;
  border-style: hidden;
  height: 1.5pt;
  background-color: lightgrey;
  margin: 20px 0;
}
.category {
  padding: 0 16px;
  text-transform: uppercase;
  font-size: 0.8rem;
}
</style>
