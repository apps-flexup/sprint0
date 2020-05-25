<template lang="pug">
  .fv-contract-step1
    h1 Détails
    v-row
      v-col(cols="6")
        v-autocomplete(
          v-model="partner"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          prepend-icon="mdi-plus"
          label="Partenaire"
          placeholder="Saisir au moins une lettre"
          item-text="name"
          item-value="id"
        )
    v-row
      v-col(cols="6")
        v-textField(
          v-model="label"
          label="Label"
          placeholder="Saisissez un label pour le contrat"
        )
      v-col(cols="6")
        v-select(
          v-model="charter"
          :items="charterList"
          item-text="name"
          item-value="id"
          label="Charter"
        )
    v-row
      v-col(cols="6")
        fv-field-date(
          :dateRef="dteSignature"
          label="Date signature"
          @date:changed="dateSignatureChanged"
        )
      v-col(cols="6")
        fv-field-date(
          :dateRef="dteEffect"
          label="Date effective"
          @date:changed="dateEffectChanged"
        )
    v-row
      v-col(cols="6")
        fv-field-date(
          :dateRef="dteEnd"
          label="Date fin"
          @date:changed="dateEndChanged"
        )
      v-col(cols="6")
        v-textField(
          v-model="duree"
          label="Durée"
        )
    v-row
      v-col(cols="6")
        v-select(
          v-model="contractType"
          :items="contractTypeList"
          item-text="name"
          item-value="id"
          label="Type de contrat"
        )
</template>

<script>
export default {
  name: 'FvContractStep1',
  data() {
    return {
      partner: null,
      charter: null,
      contractType: null,
      duree: null,
      label: null,
      isLoading: false,
      search: null,
      dteSignature: null,
      dteEffect: null,
      dteEnd: null,
      items: []
    }
  },
  computed: {
    contractTypeList() {
      const res = this.$store.getters['contracts/types']
      return res
    },
    charterList() {
      const res = this.$store.getters['charters/all']
      return res
    }
  },
  watch: {
    search(val) {
      val && val !== this.partner && this.partnerList(val)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    dateSignatureChanged(payload) {
      this.dteSignature = payload
    },
    dateEffectChanged(payload) {
      this.dteEffect = payload
    },
    dateEndChanged(payload) {
      this.dteEnd = payload
    },
    partnerList(v) {
      this.isLoading = true
      const res = this.$store.getters['partners/all']
      setTimeout(() => {
        this.items = res.filter((item) => {
          return ((item.name || '').toLowerCase().includes((v || '').toLowerCase()) > -1
        })
        this.isLoading = false
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step1 {
  background-color: inherit;
}
</style>
