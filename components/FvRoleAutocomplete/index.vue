<template lang="pug">
.fv-role-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="role"
    :items="roles"
    :filter="filter"
    item-value="value"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ label }}
    template(v-slot:item="data")
      v-list-item-content
        div {{ $t('functionalRoles.' + data.item.value) }}
    template(v-slot:selection="data")
      v-list-item-content
        div {{ $t('functionalRoles.' + data.item.value) }}
</template>

<script>
import { filterRoleAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvRoleAutocomplete',
  inheritAttrs: true,
  props: {
    role: {
      type: String,
      default() {
        return null
      }
    },
    roles: {
      type: Array,
      default() {
        return []
      }
    },
    label: {
      type: String,
      default() {
        return this.$t('autocomplete.role.label')
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
      const role = {
        ...item,
        value: this.$t('functionalRoles.' + item.value)
      }
      return filterRoleAutocomplete(role, v, it)
    },
    selected(v) {
      this.$emit('role:selected', v)
    }
  }
}
</script>
