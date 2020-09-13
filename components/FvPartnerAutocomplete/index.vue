<template lang="pug">
.fv-partner-autocomplete
  fv-autocomplete(
    :element="partnerId"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.partner') }}
    template(v-slot:item="data")
      template(v-if="typeof data.item !== 'object'")
        v-list-item-content {{ $t(data.item) }}
      template(v-else-if="data.item")
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          div {{ data.item.name }}
    template(v-slot:selection="data")
      template(v-if="typeof data.item !== 'object'")
        v-list-item-content {{ $t(data.item) }}
      template(v-else-if="data.item")
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          div {{ data.item.name }}
    template(v-slot:no-data)
      div Aucune donnée disponible
    template(v-slot:append-item)
      v-list-item-content
        v-btn(@click="addPartner" color="primary") Add new Partner
</template>

<script>
export default {
  name: 'FvPartnerAutocomplete',
  props: {
    partnerId: {
      type: Number,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('partners/get')
    this.$activeAccount.allPartners().then((data) => {
      this.items = data
    })
  },
  methods: {
    selected(v) {
      this.$emit('partner:selected', v)
    },
    filter(item, queryText, _itemText) {
      if (Object.prototype.hasOwnProperty.call(item, 'header')) return true
      const res = item.name.toLowerCase().includes(queryText.toLowerCase())
      return res
    },
    addPartner() {
      console.log('Ajouter nouveau partenaire')
    }
  }
}
</script>
