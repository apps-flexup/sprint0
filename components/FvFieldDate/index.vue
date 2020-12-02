<template lang="pug">
.fv-field-date
  v-menu(
    v-model='fromDateMenu'
    close-on-content-click=''
    :nudge-right='40'
    transition='scale-transition'
    offset-y=''
    max-width='290px'
    min-width='290px'
  )
    template(v-slot:activator='{ on }')
      fv-text-field(
        :readonly="true"
        :clearable="clearable"
        :hideDetails="hideDetails"
        :value="displayDate"
        :label="label"
        @click="fromDateMenu = !readonly"
      )
    v-date-picker(
      locale='en-in'
      :min='minDate ? minDate.toISOString() : null'
      :max='maxDate ? maxDate.toISOString() : null'
      :value='pickingDate'
      no-title=''
      @input="dateSelected"
    )
</template>

<script>
export default {
  name: 'FvFieldDate',
  props: {
    minDate: {
      type: Date,
      default() {
        return null
      }
    },
    maxDate: {
      type: Date,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return 'Date label'
      }
    },
    dateRef: {
      type: Date,
      default() {
        return null
      }
    },
    clearable: {
      type: Boolean,
      default() {
        return true
      }
    },
    hideDetails: {
      type: Boolean,
      default() {
        return false
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      fromDateMenu: false,
      pickingDate: this.dateRef ? this.dateRef.toISOString() : null
    }
  },
  computed: {
    locale() {
      const settings = this.$store.getters['settings/settings']
      const res = settings.language
      return res
    },
    displayDate() {
      const dte = new Date(this.pickingDate)
      const res = dte.toLocaleDateString(this.locale)
      return res
    }
  },
  watch: {
    dateRef() {
      this.pickingDate = this.dateRef ? this.dateRef.toISOString() : null
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    dateSelected(v) {
      console.log('v: ', v)
      this.fromDateMenu = false
      this.pickingDate = v
      this.$emit('date:changed', v)
    }
  }
}
</script>
<style scoped>
.fv-field-date {
  background-color: inherit;
}
</style>
