<template lang="pug">
  div WhatEver
</template>

<script>
export default {
  mounted() {
    this.$auth.logout()
  },
}
</script>
