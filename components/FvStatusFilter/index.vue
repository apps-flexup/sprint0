<template lang="pug">
.fv-status-filter
  div.d-flex
    div.titleContainer
      p.title.mb-0 {{ $t(`statusFilters.title`) }}
    div.filterContainer
      v-menu(
        offset-y
        :close-on-content-click="false"
      )
        template(v-slot:activator="{on, attrs }")
          div.d-flex.justify-center.align-center(v-bind="attrs", v-on="on")
            div.pr-10 {{ selectedFilters }}
            fv-icon(icon="mdi-chevron-down")
        v-list.pa-4
          fv-text-button(
            @button:click="toggleAllSelection"
          )
            template(v-slot:text)
              | {{ $t(buttonLabel) }}
          v-checkbox(
            v-model="selected"
            v-for="filter in filtersAvailable" :key="filter"
            :label="$t(`status.${filter}`)"
            :value="filter"
            @change="filtersChanged"
          )
</template>

<script>
export default {
  name: 'FvStatusFilter',
  props: {
    tableName: {
      type: String,
      default() {
        return null
      },
    },
    filtersSelected: {
      type: Array,
      default() {
        return ['active', 'inactive']
      },
    },
  },
  data() {
    return {
      selected: this.filtersSelected,
    }
  },
  computed: {
    selectedFilters() {
      if (this.areAllSelected) return this.$t('statusFilters.all')
      let res = null
      this.selected.forEach((filter) => {
        const translatedFilter = this.$t(`status.${filter}`)
        if (!res) res = translatedFilter
        else res += `, ${translatedFilter}`
      })
      if (!res) return this.$t('statusFilters.none')
      return res
    },
    filtersAvailable() {
      return this.$store.getters[`${this.tableName}/availableStatus`]
    },
    buttonLabel() {
      if (this.areAllSelected) return 'statusFilters.unselectAll'
      return 'statusFilters.selectAll'
    },
    areAllSelected() {
      return this.selected.length === this.filtersAvailable.length
    },
  },
  mounted() {
    this.filtersChanged(this.selected)
  },
  methods: {
    filtersChanged(filters) {
      this.$emit('statusFilter:filtersChanged', filters)
    },
    toggleAllSelection() {
      if (this.areAllSelected) {
        this.selected = []
      } else {
        this.selected = this.filtersAvailable
      }
      this.filtersChanged(this.selected)
    },
  },
}
</script>

<style scoped lang="scss">
.title {
  opacity: 0.5;
  padding: $datatable-header-padding;
  font-size: 1rem !important;
}
.titleContainer {
  border: $datatable-header-border-style $datatable-header-border-color;
  border-radius: $datatable-header-border-radius 0 0 $datatable-header-border-radius;
}
.filterContainer {
  border: $datatable-header-border-style $datatable-header-border-color;
  border-left: transparent;
  border-radius: 0 $datatable-header-border-radius $datatable-header-border-radius 0;
  font-size: 1rem;
  padding: $datatable-header-padding;
}
::v-deep .v-messages {
  display: none;
}
</style>
