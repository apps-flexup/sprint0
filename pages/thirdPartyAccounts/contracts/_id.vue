<template lang="pug">
  .contract-index
    h1 {{ $options.name }}
    pre {{ params }}
</template>

<script>
export default {
  computed: {
    contracts() {
      const res = []
      return res
    }
  }
}
</script>
