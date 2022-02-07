<template lang="pug">
.fv-account-medias-readonly
  div(v-for="(rule, index) in rules" :key="index")
    h3.font-weight-regular(data-testid="mediaName") {{ $t('mediaField.' + rule.toLowerCase() + '.title') }}
    v-row(v-for="(media, index) in getMediasForRule(rule)" :key="index")
      v-col(cols="5")
        fv-readonly-field(
          :value="getValueForMedia(media.description)"
        )
      v-col(cols="5")
        fv-readonly-field(
          :label="$t('mediaField.label.placeholder')"
          :value="media.description.label"
        )
    v-divider.line(v-if="index + 1 !== rules.length")
</template>

<script>
import { addressToString } from '~/plugins/utils'

export default {
  name: 'FvAccountMediasReadonly',
  props: {
    value: {
      type: Array,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      rules: ['Address', 'Mail', 'Phone'],
    }
  },
  computed: {
    medias() {
      const res = this.value || []
      return res
    },
  },
  methods: {
    getMediasForRule(rule) {
      if (!this.medias) return []
      const res = this.medias.filter((media) => {
        return media.description.type === rule
      })
      return res
    },
    getValueForMedia(description) {
      const type = description.type
      if (type === 'Address') {
        const address = description.value
        const addressString = addressToString(this.$store, address)
        return addressString
      }
      return description.value
    },
  },
}
</script>

<style scoped>
.col-12 {
  padding: 3px 12px;
}
::v-deep .col-5 {
  padding: 3px 12px;
}
.line {
  margin: 1rem 0;
}
</style>
