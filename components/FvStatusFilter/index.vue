<template lang="pug">
.fv-status-filter
  div.box
    div.titleContainer
      p.title.verticalCenter {{ $t(`statusFilters.title`) }}
    div.filterContainer
      v-menu(
        offset-y
        :close-on-content-click="false"
      )
        template(v-slot:activator="{on, attrs }")
          div.box.flex-sb.flex-ai-c(v-bind="attrs", v-on="on")
            div.text {{ selectedFilters }}
            fv-icon(icon="mdi-chevron-down")
        v-list.list
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
      }
    },
    filtersSelected: {
      type: Array,
      default() {
        return ['active', 'inactive']
      }
    }
  },
  data() {
    return {
      selected: this.filtersSelected
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
    }
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
    }
  }
}
</script>

<style scoped>
.list {
  padding: 10px 40px 10px 10px;
}
.box {
  display: flex;
  height: 100%;
}
.flex-sb {
  justify-content: space-between;
}
.flex-ai-c {
  align-items: center;
}
.verticalCenter {
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.title {
  opacity: 0.5;
  padding: 5px 20px 5px 20px;
}
.titleContainer {
  border: solid #dddee2;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.filterContainer {
  padding: 5px 20px 5px 20px;
  border: solid #dddee2;
  border-left: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.text {
  padding-right: 50px;
}
::v-deep .v-messages {
  display: none;
}
</style>
