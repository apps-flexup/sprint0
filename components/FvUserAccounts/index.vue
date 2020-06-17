<template lang="pug">
  .fv-user-accounts
    .d-flex.justify-center.align-center
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
          v-list-item(v-for='account in accounts' :key='account' link='')
            v-list-item-avatar
              v-img(:src='account.avatar')
            v-list-item-content
              v-list-item-title(v-text='account.name')
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
      ],
      accounts: [
        {
          avatar: '/static/avatar-0.png',
          name: 'truc',
          icon: true
        },
        {
          avatar: '/static/avatar-1.png',
          name: 'Marcel F.',
          icon: true
        },
        {
          avatar: '/static/avatar-2.png',
          name: 'Brian M.',
          icon: true
        },
        {
          avatar: '/static/avatar-3.png',
          name: 'Paul R.',
          icon: true
        }
      ]
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-user-accounts {
  background-color: inherit;
}
</style>
