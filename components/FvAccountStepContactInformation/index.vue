<template lang="pug">
.fv-account-step-contact-information
  div(v-for="rule in rules")
    h1(data-testid="mediaName") {{ rule }}
    v-row(v-for="(media, index) in getMediasForRule(rule)" :key="index")
      v-col(cols="6")
        fv-address-field(
          v-if="media.description.type === 'Address'"
          data-testid='addressField'
          :address="media.description ? media.description.value : null"
          :labelValue="media.description ? media.description.label : null"
          @address:value:changed="valueChanged(index, rule, ...arguments)"
          @address:label:changed="labelChanged(index, rule, ...arguments)"
        )
        fv-mail-field(
          v-if="media.description.type === 'Mail'"
          data-testid='mailField'
          :mail="media.description ? media.description.value : null"
          :labelValue="media.description ? media.description.label : null"
          @mail:value:changed="valueChanged(index, rule, ...arguments)"
          @mail:label:changed="labelChanged(index, rule, ...arguments)"
        )
        fv-phone-field(
          v-if="media.description.type === 'Phone'"
          data-testid='phoneField'
          :phone="media.description ? media.description.value : null"
          :labelValue="media.description ? media.description.label : null"
          @phone:value:changed="valueChanged(index, rule, ...arguments)"
          @phone:label:changed="labelChanged(index, rule, ...arguments)"
        )
    fv-text-button(
        data-testid="addNewMediaButton"
        @button:click="addNewMedia(rule)"
      )
        template(v-slot:icon)
          fv-icon(
            x-large=true
            icon="mdi-plus"
            color="#1976d2"
            @icon:clicked="addNewMedia(rule)"
          )
        template(v-slot:text)
          | Add new {{ rule }}

</template>

<script>
export default {
  name: 'FvAccountStepContactInformation',
  props: {
    payload: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      rules: ['Address', 'Mail', 'Phone']
    }
  },
  computed: {
    medias() {
      const medias = this.payload ? this.payload.medias : null
      const res = medias || []
      return res
    }
  },
  watch: {
    payload() {
      console.log('ca change: ', this.payload)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    findMediaIndexWithIndexOfRule(indexForRule, rule) {
      let index = 0
      let i = 0
      while (i < this.medias.length) {
        if (this.medias[i].description.type === rule) {
          if (index === indexForRule) return i
          index++
        }
        i++
      }
      return undefined
    },
    getMediasForRule(rule) {
      if (!this.medias) return []
      const res = this.medias.filter((media) => {
        return media.description.type === rule
      })
      return res
    },
    addNewMedia(rule) {
      const media = {
        entity_type: 'Account',
        entity_id: this.$activeAccount.get(),
        description: {
          type: rule,
          value: null,
          label: null
        }
      }
      const medias = this.medias
      medias.push(media)
      const payload = {
        medias
      }
      this.$emit('payload:changed', payload)
    },
    valueChanged(indexForRule, rule, description) {
      const index = this.findMediaIndexWithIndexOfRule(indexForRule, rule)
      if (index === undefined) return
      const medias = this.medias
      medias[index].description.value = description.value
      console.log('medias: ', medias)
      const payload = {
        medias
      }
      this.$emit('payload:changed', payload)
    },
    labelChanged(indexForRule, rule, description) {
      const index = this.findMediaIndexWithIndexOfRule(indexForRule, rule)
      if (index === undefined) return
      const medias = this.medias
      medias[index].description.label = description.label
      console.log('medias: ', medias)
      const payload = {
        medias
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
