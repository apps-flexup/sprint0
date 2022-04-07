<template lang="pug">
.fv-contract-list-search
  v-row
    v-col(cols="4")
      fv-autocomplete(
        :items="contracts"
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
    v-col(cols="2") contacts
    v-col(cols="2") type de partenariat
    v-col(cols="2") Structure
    v-col(cols="2") calendrier date
</template>

<script>
export default {
  name: 'FvContractListSearch',
  props: {
    contracts: {
      type: Array,
      default() {
        return []
      },
    },
    filterFunction: {
      type: Function,
      default() {
        return this.items.filter((item) => {
          const name = item.name || ''
          return name
        })
      },
    },
  },
}
</script>
