<template lang="pug">
  .fv-user-accounts
    v-btn.mx-2(
      v-if="!$auth.loggedIn"
      v-bind='attrs'
      v-on='on'
    )
      | blahblah
    .d-flex.justify-center.align-center(v-else)
      v-menu(
        :key='text'
        offset-y=''
      )
        template(v-slot:activator='{ attrs, on }')
          v-btn.mx-2(
            v-bind='attrs'
            v-on='on'
          )
            | blahblah
        v-list
          v-list-item(
            v-for='account in accounts'
            :key='account.id'
          )
            v-list-item-avatar
              v-img(:src='account.avatar')
            v-list-item-content
              v-list-item-title {{ account.name }}
          v-list-item
            v-list-item-content
              v-list-item-title
                v-btn(
                  @click="logout"
                  color="primary"
                )
                //- v-list-item-avatar
                //-   v-avatar(color="indigo" size="36")
                //-     span.white--text.headline 36
                //- v-list-item-avatar
                //-   v-avatar(color="teal" size="48")
                //-     span.white--text.headline 48
                //- v-list-item-avatar
                //-   v-avatar(color="orange" size="62")
                //-     span.white--text.headline 62
</template>

<script>
export default {
  name: 'FvUserAccounts',
  data() {
    return {
      btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl']
      ]
    }
  },
  computed: {
    accounts() {
      console.log('plop :', this.$auth)
      debugger
      const res = this.$store.getters['accounts/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contacts/get')
  },
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-user-accounts {
  background-color: inherit;
}
</style>
