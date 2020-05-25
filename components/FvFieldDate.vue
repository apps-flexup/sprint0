<template lang="pug">
  .fv-field-date
    v-layout(row='' wrap='')
      v-menu(
        v-model='fromDateMenu'
        :close-on-content-click='true'
        :nudge-right='40'
        lazy=''
        transition='scale-transition'
        offset-y=''
        full-width=''
        max-width='290px'
        min-width='290px'
      )
        template(v-slot:activator='{ on }')
          v-text-field(
            label='From Date'
            readonly=''
            :value='fromDateDisp'
            v-on='on'
            clearable='true'
            outlined=''
          )
        v-date-picker(
          locale='en-in'
          :min='minDate'
          :max='maxDate'
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
      type: String,
      default() {
        return '2020-04-04'
      }
    },
    maxDate: {
      type: String,
      default() {
        return '2020-08-04'
      }
    },
    label: {
      type: String,
      default() {
        return 'Date label'
      }
    },
    dateRef: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      fromDateMenu: false
    }
  },
  computed: {
    fromDateDisp() {
      return this.dateRef
    },
    dte: {
      get() {
        return this.dateRef
      },
      set(v) {
        this.$emit('date:changed', v)
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-field-date {
  background-color: inherit;
}
</style>
