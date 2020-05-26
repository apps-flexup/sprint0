<template lang="pug">
  .fv-etapes
    p {{ $options.name }}
    h3 {{ `Étape ${etape}` }}
    h2 {{ libEtape }}
</template>

<script>
export default {
  name: 'FvEtape',
  props: {
    etape: {
      type: Number,
      default() {
        return 1
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
