<template lang="pug">
.fv-offer-data-table
  v-data-table(
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    @click:row='selected'
    @update:sort-by="sortBy"
    @update:sort-desc="sortDesc"
  )
    template(v-slot:item.name='{ item }')
      div(v-to-locale="item.name")
    template(v-slot:item.price='{ item }')
      fv-flex-items
        template(v-slot:left)
          v-spacer
          fv-price-to-preferred-currency(
            :price="item.price"
            :currency="item.currency"
          )
        template(v-slot:separator)
          div /
        template(v-slot:right)
          div {{ item.unit }}
    template(v-slot:item.vat='{ item }')
      div.text-right {{ item.vat }}%
    template(v-slot:item.status='{ item }')
      fv-status-progress(:status="item.status")
    template(v-slot:item.actions="{ item }")
      v-row
        fv-edit-action(@edit:clicked="selected(item)")
        fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
export default {
  name: 'FvOfferDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(offer) {
      this.$emit('dataTable:selected', offer)
    },
    deleteItem(offer) {
      this.$store.dispatch('offers/remove', offer)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    sortDesc(v) {
      this.$emit('dataTable:sortDesc', v)
    }
  }
}
</script>

<style scoped>
.right {
  margin-right: 0px !important;
  margin-left: auto;
}
</style>
