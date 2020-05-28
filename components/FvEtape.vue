<template lang="html">
  <div class="fv-etapes">
    <h3>{{ `Étape ${etape}` }}</h3>
    <h2>{{ libEtape }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FvEtape',
  props: {
    etape: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    libEtape() {
      const indice = parseInt(this.etape) - 1
      const res = this.$store.getters['headers/etape'](indice)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-etapes {
  background-color: inherit;
}
</style>
