<template lang="pug">
.fv-select-headers
  fv-modal-slot(:dialog="dialog")
    template(v-slot:title)
      div {{ $t('selectHeaders.title.' + tableName) }}
    template(v-slot:form)
      v-list
        v-list-item-group(
          multiple
        )
          template(v-for="(headerGroup) in customHeaders.main || [{ text: 'plop', value: 'value'}]")
            v-subheader(
              v-if="customHeaders.sub && Object.keys(customHeaders.sub).length > 1"
            ) {{ $t('selectHeaders.subHeaders.' + headerGroup.text) }}
            draggable(
              :list="customHeaders.sub ? customHeaders.sub[headerGroup.value] : customHeaders"
              @update="update(headerGroup.value, ...arguments)"
            )
              template(v-for="(header, i) in customHeaders.sub ? customHeaders.sub[headerGroup.value] : customHeaders")
                v-list-item(
                  v-if="header.active"
                  :key="`${headerGroup.value}-header-${i}`"
                  @click="toggleEnabled(header)"
                )
                  template(v-slot:default)
                    v-list-item-action
                      fv-icon.draggableIcon(
                        icon="mdi-drag-horizontal-variant"
                        color="#BBBBBB"
                      )
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
    tableName: {
      type: String,
      default() {
        return null
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
    update(headerGroup, _v) {
      const arr = this.customHeaders.sub
        ? this.customHeaders.sub[headerGroup]
        : this.customHeaders
      for (let i = 0; i < arr.length; i++) {
        arr[i].order = i
      }
    },
    close() {
      this.customHeaders = this.headers
        ? JSON.parse(JSON.stringify(this.headers))
        : []
      this.$emit('selectHeaders:close')
    },
    save() {
      this.$emit('selectHeaders:save', this.customHeaders)
    }
  }
}
</script>

<style scoped>
.draggableIcon {
  /* margin-right: 100px !important;
  padding: 100px !important; */
}
</style>
