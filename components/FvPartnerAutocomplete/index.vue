<template lang="pug">
  .fv-partner-autocomplete
    p {{ $options.name }}
    v-autocomplete(
      v-model="partnerId"
      :items="items"
      :loading="isLoading"
      :filter="filter"
      clearable=''
      outlined=''
      return-object
      @change="selected"
    )
      template(v-slot:label)
        div Partenaire
      template(v-slot:item="data")
        template(v-if="data.item.header")
          v-list-item-content(v-locale="data.item")
        template(v-else)
          fv-partner-item(
            :partner="data.item"
            :v-bind="data.attrs"
            :v-on="data.on"
          )
      template(v-slot:selection="data")
          fv-partner-item(
            :partner="data.item"
            :v-bind="data.attrs"
            :v-on="data.on"
          )
      template(v-slot:no-data)
        div Aucune donnée disponible
</template>

<script>
export default {
  name: 'FvPartnerAutocomplete',
  props: {
    partner: {
      type: Number,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      isLoading: false,
      items: []
    }
  },
  computed: {
    partnerId: {
      get() {
        return this.partner
      },
      set(v) {
        if (v) this.$emit('partner:selected', v.id)
        else this.$emit('partner:selected', null)
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$activeAccount.allPartners().then((data) => {
      this.items = data
    })
  },
  methods: {
    selected(v) {
      this.$emit('category:selected', v)
    },
    filter(item, queryText, _itemText) {
      if (Object.prototype.hasOwnProperty.call(item, 'header')) return true
      const res = item.name.toLowerCase().includes(queryText.toLowerCase())
      return res
    }
  }
}
</script>
