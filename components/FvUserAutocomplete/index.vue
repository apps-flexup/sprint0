<template lang="pug">
.fv-user-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="user"
    :items="users"
    :returnObject="true"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ label }}
    template(v-slot:item="data")
      v-list-item-content
        div {{ data.item.name }} ({{ data.item.email }})
    template(v-slot:selection="data")
      v-list-item-content
        div {{ data.item.name }} ({{ data.item.email }})
</template>

<script>
import { filterUserAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvUserAutocomplete',
  inheritAttrs: true,
  props: {
    user: {
      type: Object,
      default() {
        return null
      }
    },
    users: {
      type: Array,
      default() {
        return []
      }
    },
    label: {
      type: String,
      default() {
        return this.$t('autocomplete.user.label')
      }
    }
  },
  computed: {
    items() {
      const res = []
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filter(item, v, it) {
      return filterUserAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('user:selected', v)
    }
  }
}
</script>
