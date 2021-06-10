<template lang="pug">
.fv-member-data-table
  fv-data-table(
    data-testid="fvDataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
  )
    template(v-slot:item.user="{ item }")
      div {{ displayUserName(item) }}
    template(v-slot:item.role="{ item }")
      fv-role-autocomplete.role(
        :role="item.role"
        :roles="functionalRoles"
        :dense="true"
        :clearable="false"
        @role:selected="roleSelected(item, ...arguments)"
      )
    template(v-slot:item.actions="{ item }")
      fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
export default {
  name: 'FvMemberDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    functionalRoles() {
      const res = this.$store.getters['functionalRoles/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('functionalRoles/get')
  },
  methods: {
    displayUserName(item) {
      const res = this.$displayRules.userNameFromUuid(item)
      return res
    },
    deleteItem(member) {
      this.$store.dispatch('members/remove', member)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    roleSelected(member, newRole) {
      member.role = newRole
      this.$store.dispatch('members/update', member)
    }
  }
}
</script>

<style scoped>
::v-deep .v-text-field__details {
  display: none;
}
.role {
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
