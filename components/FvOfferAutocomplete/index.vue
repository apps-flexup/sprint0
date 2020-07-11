<template lang="pug">
  .fv-offer-autocomplete
    p {{ $options.name }}
    fv-autocomplete(
      :items="items"
      :filter="filter"
      :disabled="disabled"
      @autocomplete:selected="selected"
    )
      template(v-slot:label)
        div {{ $t('forms.orders.new.offer') }}
      template(v-slot:item="data")
        template(v-if="typeof data.item !== 'object'")
          v-list-item-content(v-text="data.item")
        template(v-else='')
          v-list-item-avatar
            v-img(:src="data.item.illustration_url")
          v-list-item-content
            v-list-item-title(v-to-locale="data.item.name")
      template(v-slot:selection="data")
          v-list-item-avatar
            v-img(:src="data.item.illustration_url")
          v-list-item-content
            v-list-item-title(v-to-locale="data.item.name")
      template(v-slot:no-data)
        div Aucune donnée disponible
</template>

<script>
import { filterOfferAutocomplete } from '~/plugins/utils'
export default {
  name: 'FvOfferAutocomplete',
  props: {
    partnerId: {
      type: Number,
      default() {
        return null
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      items: []
    }
  },
  watch: {
    partnerId() {
      const id = parseInt(this.partnerId)
      const url = `${this.$axios.defaults.baseURL}/offers?account_id=${id}`
      this.$axios.$get(url).then((res) => (this.items = res))
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    const id = parseInt(this.partnerId)
    const url = `${this.$axios.defaults.baseURL}/offers?account_id=${id}`
    this.$axios.$get(url).then((res) => (this.items = res))
  },
  methods: {
    selected(v) {
      this.$emit('offers:selected', v)
    },
    filter(item, queryText, itemText) {
      return filterOfferAutocomplete(item, queryText, itemText)
    }
  }
}
</script>
