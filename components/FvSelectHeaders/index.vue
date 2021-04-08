<template lang="pug">
.fv-select-headers
  fv-modal-slot(
    data-testid="modal"
    :dialog="dialog"
  )
    template(v-slot:title)
      div {{ $t('selectHeaders.title.' + tableName) }}
    template(v-slot:form)
      v-list
        v-list-item
          template(v-slot:default)
            v-list-item-content
              v-list-item-title {{ $t('selectHeaders.columnName')}}
            v-list-item-action
              v-list-item-title {{ $t('selectHeaders.settings.displayed')}}
      v-list
        v-list-item-group(multiple)
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
                  @click="toggleDisplayed(header)"
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
                        :input-value="header.displayed"
                      )
    template(v-slot:actions)
      v-btn(
        color='blue darken-1'
        text=''
        @click='reset'
      ) {{  $t('modal.resetDefault')  }}
      v-spacer
      fv-modal-actions(
        @modal:actions:close="close"
        @modal:actions:save="save"
      )
</template>

<script>
import { camelToSnakeCase } from '~/plugins/utils'
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
    toggleDisplayed(header) {
      if (header.customizable) header.displayed = !header.displayed
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
    reset() {
      let headerName = this.tableName
      headerName = camelToSnakeCase(headerName)
      const defaultHeader = this.$store.getters['settings/defaultHeaders'](
        headerName
      )
      this.customHeaders = defaultHeader
    },
    save() {
      this.$emit('selectHeaders:save', this.customHeaders)
    }
  }
}
</script>
