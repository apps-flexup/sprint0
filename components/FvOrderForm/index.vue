<template lang="pug">
  .fv-order-form
    p {{ $options.name }}
    fv-order-for-partner
    pre {{ order }}
    v-row
      v-col(cols="6")
        pre ici les totaux
        div total ht : mnt dev (utiliser directive)
        div total tva(s) : mnt dev (utiliser directive)
        div total ttc : mnt dev (utiliser directive)
        div total / seniorité : mnt dev (utiliser directive)
      v-col(cols="6")
        pre ici les trucs de la livraison
    v-row
      v-col(cols="6")
        pre envoyer devis par mail
      v-col(cols="6")
        pre generer pdf
</template>

<script>
export default {
  name: 'FvOrderForm',
  props: {
    orderList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    orderDetail() {
      const res = []
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
