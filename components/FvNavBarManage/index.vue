<template lang="pug">
.fv-nav-bar-manage
  fv-nav-bar(
    data-testid="navBar"
    :title='title'
    :space="space"
  )
    template(slot='left')
      v-list-item(
        data-testid="links"
        v-for="(item, a) in links"
        :key="a"
        :to="item.to"
        router
      )
        v-btn(elevation='0' class='navBtn')
          | {{ $t(item.title) }}
    template(slot='right')
      v-btn(
        data-testid="createButton"
        elevation="0"
        class="navRightBtn"
      )
        | button
      v-badge(
        :content='messages'
        :value='messages'
        color='green'
        overlap=''
      )
        v-icon(
          @click="seeNotification"
        )
          | mdi-bell
</template>

<script>
export default {
  name: 'FvNavBarManage',
  props: {
    space: {
      type: String,
      default() {
        return null
      },
    },
    title: {
      type: String,
      default() {
        return 'Flex Up - Sprint 0'
      },
    },
  },
  data() {
    return {
      messages: 2,
    }
  },
  computed: {
    links() {
      const res = this.$store.getters['settings/' + this.space + 'NavBar']
      return res
    },
  },
  methods: {
    seeNotification() {
      this.$router.push('/notifications')
    },
  },
}
</script>

<style scoped>
.navBtn {
  text-transform: initial;
  font-size: 0.95rem;
}
.navRightBtn {
  margin: 0 16px;
  border: grey solid 1px;
  border-radius: 10px;
  color: grey;
}
.fv-nav-bar-slots-left >>> div {
  display: flex;
}
.v-list-item {
  padding: 0;
  margin: 0 5px;
  min-height: initial;
  flex: initial;
}
a {
  padding: initial;
}
</style>
