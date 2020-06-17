<template lang="pug">
  .fv-user-accounts
    .d-flex.justify-center.align-center
      v-menu(
        :key='text'
        rounded='b-xl'
        offset-y=''
      )
        template(v-slot:activator='{ attrs, on }')
          v-btn.mx-2(
            v-bind='attrs'
            v-on='on'
          )
            | blahblah
        v-list
          v-list-item(v-for='item in items' :key='item' link='')
            v-list-item-title(v-text='item')
</template>

<script>
export default {
  name: 'FvUserAccounts',
  data() {
    return {
      btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl']
      ],
      items: [...Array(4)].map((_, i) => `Item ${i}`)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-user-accounts {
  background-color: inherit;
}
</style>
