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
        :value='displayDate ? displayDate.substring(0,10) : null'
        :label='label'
        @click='fromDateMenu = true'
      )
    v-date-picker(
      locale='en-in'
      :min='minDate ? minDate.toISOString() : null'
      :max='maxDate ? maxDate.toISOString() : null'
      v-model='dte'
      no-title=''
      @input='fromDateMenu = false'
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
    }
  },
  data() {
    return {
      fromDateMenu: false,
      displayDate: this.dateRef ? this.dateRef.toLocaleString() : null,
      pickingDate: this.dateRef ? this.dateRef.toISOString() : null
    }
  },
  computed: {
    dte: {
      get() {
        return this.pickingDate
      },
      set(v) {
        const toDisplay = new Date(v)
        this.displayDate = toDisplay.toLocaleString()
        this.pickingDate = v
        this.$emit('date:changed', v)
      }
    }
  },
  watch: {
    dateRef() {
      this.displayDate = this.dateRef ? this.dateRef.toLocaleString() : null
      this.pickingDate = this.dateRef ? this.dateRef.toISOString() : null
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.fv-field-date {
  background-color: inherit;
}
</style>
