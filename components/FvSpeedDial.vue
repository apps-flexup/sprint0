<template lang="pug">
.fv-speed-dial
  v-speed-dial(
    v-model='fab'
    bottom=''
    right=''
    direction='top'
    transition='slide-y-reverse-transition'
  )
    template(v-slot:activator='')
      v-btn(
        v-model='fab'
        color='blue darken-2'
        dark=''
        fab=''
      )
        v-icon(v-if='fab') mdi-close
        v-icon(v-else='') mdi-account-circle
    v-btn(
      fab=''
      dark=''
      small=''
      color='green'
      @click.stop="selection('actionA')"
    )
      v-icon mdi-pencil
    v-btn(
      fab=''
      dark=''
      small=''
      color='indigo'
      @click.stop="selection('actionB')"
    )
      v-icon mdi-plus
    v-btn(
      fab=''
      dark=''
      small=''
      color='red'
      @click.stop="selection('actionC')"
    )
      v-icon mdi-delete
</template>

<script>
export default {
  name: 'FvSpeedDial',
  data() {
    return {
      fab: true
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selection(v) {
      console.log('on emet :', v)
      const payload = {
        src: this.$options.name,
        event: v
      }
      this.$emit('action:selected', payload)
    }
  }
}
</script>
