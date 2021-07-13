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
      div {{ displayMemberName(item) }}
    template(v-slot:item.role="{ item }")
      fv-role-autocomplete.role(
        v-if="canUpdateRoleFor(item.to_id)"
        :role="item.role"
        :roles="functionalRoles"
        :dense="true"
        :clearable="false"
        @role:selected="roleSelected(item, ...arguments)"
      )
      fv-readonly-field.role(
        v-else
        :value="$t(`functionalRoles.${item.role}`)"
      )
    template(v-slot:item.actions="{ item }")
      fv-delete-action(v-if="canUpdateRoleFor(item.to_id)" @delete:clicked="deleteItem(item)")
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
    this.$store.dispatch('members/get')
  },
  methods: {
    canUpdateRoleFor(userId) {
      const currentUserId = this.$auth.user.sub
      const activeAccountId = this.$activeAccount.get()
      const roles = this.$store.getters['members/roleFor'](
        activeAccountId,
        currentUserId
      )
      const canIUpdateMyself = this.nbAdmins() > 1 || currentUserId !== userId
      return roles.includes('admin') && canIUpdateMyself
    },
    nbAdmins() {
      const allMembers = this.$store.getters['members/all']
      const allAdmins = allMembers.filter((member) => member.role === 'admin')
      const nbOfAdmins = allAdmins.length
      return nbOfAdmins
    },
    displayMemberName(item) {
      const res = this.$displayRules.memberName(item)
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
