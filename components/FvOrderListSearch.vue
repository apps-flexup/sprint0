<template lang="pug">
  .fv-order-list-search
    v-row
      v-col(cols="8")
        fv-auto-complete(
          :items="orders"
          v-bind='$attrs'
        )
        template(v-slot:selection='data')
            | {{ data }}
        template(v-slot:item='data')
          template(v-if="typeof data.item !== 'object'")
            v-list-item-content(v-text='data.item')
          template(v-else='')
            v-list-item-avatar
              img(:src='data.item.avatar')
            v-list-item-content
              v-list-item-title(v-html='data.item.name')
              v-list-item-subtitle(v-html='data.item.group')
      v-col(cols="4") Label
      v-col(cols="4") Status
</template>

<script>
export default {
  name: 'FvOrderListSearch',
  props: {
    orders: {
      type: Array,
      default() {
        return []
      }
    },
    filterFunction: {
      type: Function,
      default(v) {
        return this.items.filter((item) => {
          console.log('cherche :', v, ', item :', item)
          const name = item.name || ''
          // return name.toLowerCase().includes((v || '').toLowerCase()) > -1
          return name
        })
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-order-list-search {
  background-color: inherit;
}
</style>
