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
      ) {{ displayedAccountType }}
      v-card-text.text-center.pt-0(
        data-testid="userRole"
        :key="role"
      ) {{ displayedRole }}
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
  computed: {
    displayedAccountType() {
      const accountTypeLabel = this.$t('account.type')
      const separator = this.$t('ponctuation.colons')
      const lowerCaseType = this.lowerCaseFirstLetter(this.type)
      const accountType = this.$t(`account.${lowerCaseType}.name`)
      return `${accountTypeLabel}${separator}${accountType}`
    },
    displayedRole() {
      if (!this.role) return this.$t('account.noRole')
      const roleLabel = this.$t('account.myRole')
      const separator = this.$t('ponctuation.colons')
      const role = this.$t(`functionalRoles.${this.role}`)
      return `${roleLabel}${separator}${role}`
    }
  },
  mounted() {
    this.setRoleOfUser()
  },
  methods: {
    cardClicked() {
      this.$router.push('/accounts/' + this.id)
    },
    favoriteClicked() {
      this.$emit('accountCard:favoriteClicked')
    },
    async setRoleOfUser() {
      const uuid = this.$auth.user.sub
      const givenRoles = await this.$repos.givenRoles.index()
      givenRoles.forEach((givenRole) => {
        if (givenRole.to_id === uuid && givenRole.from_id === this.id) {
          this.role = givenRole.role
        }
      })
    },
    lowerCaseFirstLetter(str) {
      return str.charAt(0).toLowerCase() + str.slice(1)
    }
  }
}
</script>
