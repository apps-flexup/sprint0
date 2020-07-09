<template lang="pug">
  .fv-offer-form
    v-row(justify="space-around")
      v-col(cols="12")
        v-slider(v-model="steps" label="Steps" min="2" max="20")
      v-switch(v-model="vertical" label="Vertical")
      v-switch(v-model="altLabels" label="altLabels")
      v-switch(v-model="editable" label="Editable")
    v-stepper(v-model="e1" :vertical="vertical" :alt-labels="altLabels")
      template(v-if="vertical")
        template(v-for="n in steps")
          v-stepper-step(:key="`${n}-step`" :complete="e1 > n" :step="n" :editable="editable")
            | Step {{ n }}
          v-stepper-content(:key="`${n}-content`" :step="n")
            v-card.mb-12(color="grey lighten-1" height="200px")
            v-btn(color="primary" @click="nextStep(n)")
              | Continue
            v-btn(text="") Cancel
      template(v-else="")
        v-stepper-header
          template(v-for="n in steps")
            v-stepper-step(:key="`${n}-step`" :complete="e1 > n" :step="n" :editable="editable")
              | Step {{ n }}
            v-divider(v-if="n !== steps" :key="n")
        v-stepper-items
          v-stepper-content(v-for="n in steps" :key="`${n}-content`" :step="n")
            v-card.mb-12(color="grey lighten-1" height="200px")
            v-btn(color="primary" @click="nextStep(n)")
              | Continue
            v-btn(text="") Cancel
</template>

<script>
export default {
  name: 'FvOrderForm',
  data() {
    return {
      e1: 1,
      steps: 2,
      vertical: false,
      altLabels: false,
      editable: true,
      stepperOrientation: false,
      orderSteps: [],
      order: {},
      orderItems: [],
      partnerAddress: {}
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$repos.orderSteps.index().then((res) => (this.orderSteps = res))
  },
  methods: {
    newPartner() {
      console.log('new partner')
    },
    newProduct() {
      console.log('new product')
    },
    structureSelected(structureId) {
      this.order.structure_id = structureId
    },
    partnerSelected(partnerId) {
      this.order.partner_id = partnerId
      this.partnerAddress = {}
      // const res = this.$activeAccount.partners().filter((v) => v.id === partner_id)
      this.$repos.partners.show(partnerId).then((res) => {
        this.partnerAddress = {
          ...res,
          libAdd: `${res.address} ${res.city} ${res.country}`
        }
      })
    },
    productSelected(productId) {
      this.$repos.offers.show(productId).then((res) => {
        this.orderItems.push(res)
      })
    }
  }
}
</script>
