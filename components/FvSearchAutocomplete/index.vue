<template lang="pug">
  .fv-search-autocomplete
    div(class='searchBar')
      v-select(
        data-testid='selector'
        class='selector'
        :items='item'
        v-model='defaultSelect'
        outlined
        :rounded='true'
        :dense='true'
      )
      fv-autocomplete(
        data-testid='searchBar'
        class='search'
        appendIcon='mdi-magnify'
        :element="categoryId"
        :dense='true'
        :items="items"
        :filter="filterList"
        placeholder="Un livre, un babysitter, du fromage, un comptable..."
        auto-select-first
        @autocomplete:selected="selected"
      )
        template(v-slot:item="data")
          v-list-item-content
            v-list-item-title(v-to-locale="data.item.name")
        template(v-slot:selection="data")
          v-list-item-content
            v-list-item-title(v-to-locale="data.item.name")
</template>

<script>
import { filterCategoryAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvSearchAutocomplete',
  inheritAttrs: true,
  props: {
    categoryId: {
      type: Number,
      default() {
        return null
      }
    },
    defaultSelect: {
      type: String,
      default() {
        return 'Catégories'
      }
    }
  },
  data() {
    return {
      item: ['Catégories', 'Produits', 'Offres', 'Services']
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['categories/all']
      return res
    }
  },
  mounted() {
    this.$store.dispatch('categories/get')
  },
  methods: {
    filterList(item, v, it) {
      return filterCategoryAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>

<style scoped>
.searchBar {
  display: flex;
  margin-left: 50px;
}

.v-list-item__content {
  flex: auto;
  padding: 0;
}

.fv-autocomplete {
  width: 30vw;
  overflow: hidden;
}

::v-deep .v-select.v-text-field input::placeholder {
  font-style: italic !important;
  font-size: 1rem;
  padding: 0 10px;
}

::v-deep .fv-autocomplete .v-list-item__title {
  font-size: 1rem !important;
  padding: 0 15px;
}

.selector {
  border-radius: 10px 0 0 10px !important;
  width: 10vw;
}

::v-deep .fv-autocomplete .v-input__slot {
  border-radius: 0 10px 10px 0;
  margin: 0;
}

::v-deep .fv-autocomplete .v-icon {
  transform: initial !important;
}

::v-deep .v-text-field__details {
  display: none;
}

::v-deep .v-input__slot {
  margin-bottom: 0;
}

::v-deep .v-input--dense > .v-input__control > .v-input__slot {
  margin: 0;
  padding: 0 10px 0 20px;
}

::v-deep .fv-autocomplete .v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border-left: none !important;
}

::v-deep .v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border: lightgray solid 1px;
}
</style>
