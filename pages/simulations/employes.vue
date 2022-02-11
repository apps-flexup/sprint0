<template lang="pug">
  .page-employes
    v-row
      v-col(cols="6") gyufg
    v-row
      v-col(cols="3") Emploi
      v-col(cols="3") Pourcentage
      v-col(cols="3") Quantité
      v-col(cols="3") Hypothèse
    v-row(
      v-for="emp in tousLesEmployes"
      :key="emp.id"
    )
      v-col(cols="3") {{ emp.job }}
      v-col(cols="3") {{ emp.pct }}
      v-col(cols="3") {{ emp.qte }}
      v-col(cols="3") HHHH
</template>

<script>
export default {
  data() {
    return {
      employes: [],
    }
  },
  computed: {
    tousLesEmployes() {
      const res = this.employes.filter((i) => i.job !== 'all').sort((a, b) => a.ordre < b.ordre)
      return res
    },
  },
  mounted() {
    this.$repos.employes.index().then((res) => (this.employes = res))
  },
}
</script>
<style scoped>
.page-employes {
  background-color: inherit;
}
</style>
