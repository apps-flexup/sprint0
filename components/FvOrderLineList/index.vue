<template lang="pug">
  .fv-order-item-list
    p {{ $options.name }}
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='orderLines'
          item-key='id'
        )
          template(v-slot:item.offer="{ item }")
            div(v-to-locale="item.offer")
          template(v-slot:item.unit="{ item }")
            div(v-to-unit="item")
          template(v-slot:item.quantity="{ item }")
            v-text-field(
              v-model="item.quantity"
            )
              template(v-slot:append)
                v-btn(
                  icon
                  @click.stop="item.quantity = item.quantity - 1"
                )
                  v-icon mdi-minus
              template(v-slot:prepend)
                v-btn(
                  icon
                  @click.stop="item.quantity = item.quantity + 1"
                )
                  v-icon mdi-plus
            //- v-icon(
            //-   slot="append"
            //-   color="red"
            //- ) mdi-plus
            //- v-icon(
            //-   slot="prepend"
            //-   color="green"
            //- ) mdi-minus
          template(v-slot:item.price="{ item }")
            div(v-to-currency-quantity="item")
          template(v-slot:item.status="{ item }")
            fv-status-progress-atom(:status="item.status")
          template(v-slot:item.actions="{ item }")
            v-icon(small='' @click.stop="deleteOrderLine(item)")
              | mdi-delete
</template>

<script>
export default {
  name: 'FvOrderLineList',
  props: {
    orderLines: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOrderLines()
      return this.$translateHeaders(res)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderLineHeaders')
  },
  methods: {
    deleteOrderLine(v) {
      this.$emit('orderLines:delete', v)
    }
  }
}
</script>