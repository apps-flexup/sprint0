<template lang="pug">
.fv-order-modal
  fv-modal-slot(
    data-testid="modal"
    :dialog="show"
  )
    template(
      slot='title'
    )
      v-toolbar(flat)
        v-toolbar-title {{ order.label ? order.label : $t('table.orders.name') }}
        v-spacer
        v-btn(
          icon
          @click.stop="close"
        )
          v-icon mdi-close
    template(
      slot='form'
    )
      fv-order-details(
        :order="order"
        @order:changed="orderChanged"
      )
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default() {
        return false
      }
    },
    order: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('modal:close')
    },
    save() {
      this.$emit('modal:save')
    },
    orderChanged(order) {
      this.$emit('order:changed', order)
    }
  }
}
</script>
