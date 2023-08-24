<template lang="pug">
.fv-review
  v-row
    v-col(cols="12" class="headDetails")
      fv-avatar(
        class="icon"
        :avatar="avatar"
      )
      v-col(cols="10")
        v-row
          div.left {{ username }}
          div {{ displayDate }}
        v-row
          fv-rating(
            :rating="rating"
            :readonly="true"
          )
  v-row
    div {{ review }}
</template>

<script>
export default {
  name: 'FvReview',
  props: {
    avatar: {
      type: String,
      default() {
        return ''
      }
    },
    username: {
      type: String,
      default() {
        return ''
      }
    },
    date: {
      type: Date,
      default() {
        return null
      }
    },
    review: {
      type: String,
      default() {
        return ''
      }
    },
    rating: {
      type: Number,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      displayDate: this.setDate(this.date)
    }
  },
  watch: {
    date() {
      this.displayDate = this.setDate(this.date)
    }
  },
  methods: {
    setDate(date) {
      if (!date) return null
      const res = date.toLocaleString().substring(0, 10)
      return res
    }
  }
}
</script>

<style scoped>
.icon {
  padding-right: 5px;
}
.left {
  text-align: right;
  padding-right: 5px;
}
.headDetails {
  display: flex;
  align-items: center;
}
</style>
