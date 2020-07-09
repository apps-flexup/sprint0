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
        div {{ $t('forms.orders.new.partner') }}
      template(v-slot:item="data")
        template(v-if="typeof data.item !== 'object'")
          v-list-item-content(v-locale="data.item")
        template(v-else='')
          v-list-item-avatar
            v-img(:src="data.item.avatar")
          v-list-item-content
            div {{ data.item.name }}
      template(v-slot:selection="data")
          v-list-item-avatar
            v-img(:src="data.item.avatar")
          v-list-item-content
            div {{ data.item.name }}
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
        this.selected(v)
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
      this.$emit('partner:selected', v)
    },
    filter(item, queryText, _itemText) {
      if (Object.prototype.hasOwnProperty.call(item, 'header')) return true
      const res = item.name.toLowerCase().includes(queryText.toLowerCase())
      return res
    }
  }
}
</script>
