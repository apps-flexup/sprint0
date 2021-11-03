<template lang="pug">
.fv-member-index
  div(v-if="accountType === 'Personal'")
    h2 {{ $t('errors.access.members') }}
  div(v-else)
    v-row
      v-col(cols="6")
        h1 {{ $t('table.members.title', { accountName }) }}
      v-col(cols="6")
        fv-primary-button.text-right(
          v-if="canInvite"
          data-testid="inviteMemberButton"
          @button:click='inviteMember'
        ) {{ $t('buttons.inviteMember') }}
    fv-member-list(
      data-testid="memberList"
    )
    fv-modal-slot(
      v-if="canInvite"
      data-testid="inviteMemberModal"
      :dialog="dialog"
    )
      template(v-slot:title)
        fv-modal-header(
          :title="$t('forms.members.title')"
          @modal:header:close="close"
        )
      template(v-slot:form)
        fv-directory(
          :selected="entity"
          :directory="naturalPersons"
          @entity:selected="entitySelected"
        )
        fv-role-autocomplete(
          v-if="entity"
          :role="role"
          :roles="functionalRoles"
          @role:selected="roleSelected"
        )
      template(v-slot:actions)
        v-spacer
        fv-modal-button(
          data-testid="closeButton"
          @button:click="close"
        ) {{ $t('modal.close') }}
        fv-modal-button(
          data-testid="sendInvitation"
          @button:click="sendInvitation"
        ) {{ $t('modal.sendInvitation') }}

</template>

<script>
export default {
  name: 'FvMemberIndex',
  data() {
    return {
      dialog: false,
      entity: null,
      role: null
    }
  },
  asyncComputed: {
    async naturalPersons() {
      const naturalPersons = await this.$directory.naturalPersons()
      const activeUserUuid = this.$auth.user.sub
      const res = naturalPersons.filter((naturalPerson) => {
        return naturalPerson.parent_id !== activeUserUuid
      })
      return res
    }
  },
  computed: {
    accountType() {
      const type = this.$activeAccount.type() || 'Personal'
      return type
    },
    accountName() {
      const activeAccountId = this.$activeAccount.get()
      const account = this.$store.getters['accounts/findById'](activeAccountId)
      const res = account ? account.name : null
      return res
    },
    functionalRoles() {
      const res = this.$store.getters['functionalRoles/all']
      return res
    },
    canInvite() {
      return this.$rights.canInviteMember()
    }
  },
  mounted() {
    this.$store.dispatch('functionalRoles/get')
  },
  methods: {
    inviteMember() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    },
    sendInvitation() {
      if (!this.entity || !this.role) {
        // On affiche une erreur ici
        return
      }
      this.dialog = false
      this.$activeAccount.inviteEntityWithRole(this.entity, this.role)
      this.entity = null
      this.role = null
    },
    entitySelected(v) {
      this.entity = v
    },
    roleSelected(v) {
      this.role = v
    }
  }
}
</script>

<style scoped>
.row {
  align-items: center;
}
</style>
