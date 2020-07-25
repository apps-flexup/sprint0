<template lang="pug">
  fv-modal-slot(:dialog="show")
    template(
      slot='title'
    )
      v-toolbar(flat='')
        v-toolbar-title {{ $t('forms.products.new.title') }}
        v-spacer
        v-btn(
          icon=''
          @click.stop="close"
        )
          v-icon mdi-close
    template(
      slot='form'
    )
      fv-product-form(
        :product="product"
        @product:changed="productChanged"
      )
    template(
      slot='actions'
    )
      v-spacer
      fv-close-modal-button(
        @button:close="close"
      )
      v-btn(
        color='blue darken-1'
        text=''
        @click.stop='save'
      ) {{ $t('modal.save') }}
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
    product: {
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
    productChanged(product) {
      this.$emit('product:changed', product)
    }
  }
}
</script>
