<template lang="pug">
.fv-account-card
  fv-slot-item-card(
    data-testid="card"
    @card:clicked="cardClicked"
    @favorite:clicked="favoriteClicked"
  )
    template(v-slot:default)
      v-card-title.justify-center
        fv-avatar(
          data-testid="avatar"
          :avatar="avatar"
          :size="avatarSize"
        )
      v-card-title.justify-center(
        data-testid="name"
      ) {{ name }}
      v-card-text.text-center.pb-0(
        data-testid="accountType"
      ) {{ $t('account.type') }} : {{ $t(`account.${lowerCaseFirstLetter(type)}.name`) }}
      v-card-text.text-center.pt-0(
        data-testid="userRole"
      ) {{ $t('account.myRole') }} : {{ $t('functionalRoles.' + role) }}
</template>

<script>
export default {
  name: 'FvAccountCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    avatar: {
      type: String,
      default() {
        return null
      }
    },
    name: {
      type: String,
      default() {
        return null
      }
    },
    type: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      avatarSize: 128,
      role: null
    }
  },
  mounted() {
    this.roleOfUser()
  },
  methods: {
    cardClicked() {
      this.$router.push('/accounts/' + this.id)
    },
    favoriteClicked() {
      this.$emit('accountCard:favoriteClicked')
    },
    roleOfUser() {
      const uuid = this.$auth.user.sub
      this.$repos.givenRoles.index().then((data) => {
        data.forEach((account) => {
          if (account.to_id === uuid && account.id === this.id) {
            this.role = account.role
          }
        })
      })
    },
    lowerCaseFirstLetter(str) {
      return str.charAt(0).toLowerCase() + str.slice(1)
    }
  }
}
</script>
