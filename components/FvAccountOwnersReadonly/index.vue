<template lang="pug">
.fv-account-owners
  div(data-testid="ownerList")
    v-row(v-for="owner in value")
      v-col(cols="12")
        v-chip(
          data-testid="owner"
          :key="owner.name"
          color="white"
        ) {{ owner.name }}
</template>

<script>
export default {
  name: 'FvAccountOwnersReadonly',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
