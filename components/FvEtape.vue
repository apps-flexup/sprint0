<template lang="pug">
.fv-etapes
  h3 {{ $tc('forms.title', etape.id) }}
  h2 {{ $t(etape.name) }}
</template>

<script>
export default {
  props: {
    etape: {
      type: Object,
      default() {
        return {
          id: -175,
          name: 'forms.contracts.step.0',
        }
      },
    },
  },
}
</script>
