<template lang="pug">
  .partners-index
    v-row(align="center")
      v-spacer
      fv-create-button(
        :text="$t('buttons.create.partner')"
        @button:click='showModal = true'
      )
      fv-partner-modal(
        :show="showModal"
        :partner='selected'
        @modal:close="close"
        @modal:save="save"
      )
    fv-partner-list(@list:selected="selectedPartner")
</template>

<script>
export default {
  data() {
    return {
      selected: {},
      showModal: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.selected = {}
      this.showModal = false
    },
    save(e) {
      this.showModal = false
      console.log('e: ', e)
      this.$store.dispatch('partners/add', e)
      this.selected = {}
    },
    selectedPartner(e) {
      console.log('partenaire selectionné', e)
      this.selected = JSON.parse(JSON.stringify(e))
      this.showModal = true
    }
  }
}
</script>
