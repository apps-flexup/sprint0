<template lang="pug">
.fv-media-field
  v-row.flex
    v-col(cols=5)
      fv-text-field(
        data-testid="valueField"
        :label="mediaLabel"
        :value="mediaValue"
        :readonly="isMediaValueReadonly"
        @input="valueChanged"
        @click="valueClicked"
      )
    v-col(cols=5)
      fv-text-field(
        data-testid="labelField"
        :label="$t('mediaField.label')"
        :value="labelValue"
        @input="labelChanged"
      )
    v-col(cols=2)
      fv-icon(
        data-testid="deleteIcon"
        icon="mdi-delete"
        @icon:clicked="deleteClicked"
      )
</template>

<script>
export default {
  name: 'FvMediaField',
  props: {
    isMediaValueReadonly: {
      type: Boolean,
      default() {
        return false
      }
    },
    mediaValue: {
      type: [Number, String],
      default() {
        return null
      }
    },
    mediaLabel: {
      type: String,
      default() {
        return null
      }
    },
    labelValue: {
      type: String,
      default() {
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    valueChanged(v) {
      this.$emit('media:value:changed', v)
    },
    valueClicked() {
      this.$emit('media:value:clicked')
    },
    labelChanged(v) {
      this.$emit('media:label:changed', v)
    },
    deleteClicked() {
      this.$emit('media:delete:clicked')
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex !important;
  align-items: baseline;
}
</style>
