<template lang="pug">
.fv-product-form
    v-row.head
      fv-icon.mr-11(
        data-testid="icon"
        color="inherit"
        size="xLarge"
        icon="mdi-chevron-left"
        @icon:clicked="cancel"
      )
      h1(data-testid="pageTitle") {{ $t('forms.' + form + '.' + action + '.title') }}
    v-list.mt-10(
      data-testid="listProductStep"
      v-for="(step, index) in getFormStep"
      :key="index"
    )
      fv-step-form(
        data-testid="stepForm"
        :formId="index+1"
        :title="$t(step.title)"
      )
        template(slot="form")
          composant(
            :is="step.component"
            :product="product"
            :offer="offer"
            @product:changed="productChanged"
            @offer:changed="offerChanged"
          )
    div.btn.mt-10
      fv-secondary-button(
        data-testid="cancelBtn"
        @button:click="cancel"
      ) {{ $t('forms.products.new.cancel') }}
      fv-primary-button(
        data-testid="submitBtn"
        @button:click="submit"
      ) {{ $t('forms.products.new.validate') }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
    offer: {
      type: Object,
      default() {
        return {}
      }
    },
    action: {
      type: String,
      default() {
        return null
      }
    },
    url: {
      type: String,
      default() {
        return null
      }
    },
    form: {
      type: String,
      default() {
        return null
      }
    },
    add: {
      type: Function,
      default() {
        return null
      }
    }
  },
  computed: {
    getFormStep() {
      const res = this.$store.getters['forms/' + this.form]
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('forms/getProduct')
    this.$store.dispatch('forms/getOffer')
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start()
      this.$emit('product:add', this.product)
      this.$router.push('/' + this.url)
      this.$nuxt.$loading.finish()
    },
    cancel() {
      this.$router.push('/' + this.url)
      this.$emit('clicked')
    },
    productChanged(product) {
      this.product = product
    },
    offerChanged(offer) {
      this.offer = offer
    }
  }
}
</script>

<style scoped>
::v-deep .v-sheet {
  border-radius: 15px;
}
::v-deep .v-list.mt-10.v-sheet.theme--light {
  background-color: rgb(241, 241, 241);
}
.btn {
  display: flex;
  justify-content: space-between;
}
.head {
  align-items: center;
}
</style>
