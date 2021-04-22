<template lang="pug">
.fv-media-field
  fv-flex-items
    template(v-slot:left)
      fv-text-field(
        data-testid="valueField"
        :label="mediaLabel"
        :value="mediaValue"
        :readonly="isMediaValueReadonly"
        @input="valueChanged"
        @click="valueClicked"
      )
    template(v-slot:right)
      fv-text-field.right(
        data-testid="labelField"
        :label="$t('mediaField.label')"
        :value="labelValue"
        @input="labelChanged"
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
    }
  }
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
