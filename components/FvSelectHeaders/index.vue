<template lang="pug">
.fv-select-headers
  fv-modal-slot(:dialog="dialog")
    template(v-slot:title)
      div Coucou on test
    template(v-slot:form)
      v-list
        v-list-item-group(
          multiple
        )
          template(v-for="(header, i) in customHeaders")
            v-list-item(
              v-if="header.active"
              :key="`header-${i}`"
              @click="toggleEnabled(header)"
            )
              template(v-slot:default)
                v-list-item-content
                  v-list-item-title(
                    v-text="$t(header.text)"
                  )
                v-list-item-action
                  v-checkbox(
                    v-if="header.customizable"
                    :input-value="header.enabled"
                  )
    template(v-slot:actions)
      v-spacer
      fv-modal-actions(
        @modal:actions:close="close"
        @modal:actions:save="save"
      )
</template>

<script>
export default {
  name: 'FvSelectHeaders',
  props: {
    dialog: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: [Array, Object],
      default() {
        return []
      }
    }
  },
  data() {
    return {
      customHeaders: this.headers
        ? JSON.parse(JSON.stringify(this.headers))
        : []
    }
  },
  watch: {
    headers() {
      this.customHeaders = this.headers
        ? JSON.parse(JSON.stringify(this.headers))
        : []
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    toggleEnabled(header) {
      if (header.customizable) header.enabled = !header.enabled
    },
    close() {
      this.customHeaders = this.headers
        ? JSON.parse(JSON.stringify(this.headers))
        : []
      this.$emit('selectHeaders:close')
    },
    save() {
      const payload = []
      this.customHeaders.forEach((customHeader) => {
        const exist = this.headers.find((header) => {
          return JSON.stringify(header) === JSON.stringify(customHeader)
        })
        if (!exist) payload.push(customHeader)
      })
      this.$emit('selectHeaders:save', this.customHeaders)
    }
  }
}
</script>
