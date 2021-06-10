<template lang="pug">
.fv-member-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        data-testid="inviteMemberButton"
        @button:click='inviteMember'
      ) {{ $t('buttons.inviteMember') }}
  fv-member-list(
    data-testid="memberList"
  )
  fv-modal-slot(
    data-testid="inviteMemberModal"
    :dialog="dialog"
  )
    template(v-slot:title)
      fv-modal-header(
        :title="$t('forms.members.title')"
        @modal:header:close="close"
      )
    template(v-slot:form)
      fv-user-autocomplete(
        :user="user"
        :users="users"
        @user:selected="userSelected"
      )
      fv-role-autocomplete(
        v-if="user"
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
      user: null,
      role: null
    }
  },
  computed: {
    users() {
      const users = this.$store.getters['users/all']
      const activeUserUuid = this.$auth.user.sub
      const res = users.filter((user) => user.uuid !== activeUserUuid)
      // Here we also need to remove users who are already members of the active account
      return res
    },
    functionalRoles() {
      const res = this.$store.getters['functionalRoles/all']
      return res
    }
  },
  mounted() {
    this.$store.dispatch('users/get')
    this.$store.dispatch('functionalRoles/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    inviteMember() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    },
    sendInvitation() {
      if (!this.user || !this.role) {
        // On affiche une erreur ici
        return
      }
      this.dialog = false
      this.$activeAccount.inviteUserWithRole(this.user, this.role)
      this.user = null
      this.role = null
    },
    userSelected(v) {
      this.user = v
    },
    roleSelected(v) {
      this.role = v
    }
  }
}
</script>
