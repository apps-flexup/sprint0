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
    @list:selected="selectedMember"
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
      pre {{ user }}
      div(v-if="user") ici le role
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
      user: null
    }
  },
  computed: {
    users() {
      const users = this.$store.getters['users/all']
      const activeUserUuid = this.$auth.user.sub
      const res = users.filter((user) => user.uuid !== activeUserUuid)
      // Here we also need to remove users who are already members of the active account
      return res
    }
  },
  mounted() {
    this.$store.dispatch('users/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    inviteMember() {
      this.dialog = true
      console.log('plop on add')
    },
    selectedMember(v) {
      console.log('on select: ', v)
    },
    close() {
      this.dialog = false
    },
    sendInvitation() {
      this.dialog = false
    },
    userSelected(v) {
      this.user = v
    }
  }
}
</script>
