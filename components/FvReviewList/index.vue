<template lang="pug">
.fv-review-list
  v-row
    v-col(cols="12")
      div.title {{ $t('shop.buyer.products.details.title') }}
  v-row
    v-col.header(cols="12")
      fv-rating.left(
        :rating="averageRating"
        :readonly="true"
        :size=25
      )
      div {{ numberOfReviews }} {{ ' ' + $t('shop.buyer.review') }}
  v-row(
    v-for="review in reviews"
    :key="review.id"
  )
    v-col(cols="12")
      v-row
        v-divider
      v-row
        v-col(cols="12")
          fv-review(
            :avatar="review.avatar"
            :username="review.username"
            :date="review.date"
            :review="review.review"
            :rating="review.rating"
          )
</template>

<script>
export default {
  name: 'FvReviewList',
  props: {
    reviews: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    averageRating() {
      let total = 0
      this.reviews.forEach((review) => {
        total += review.rating
      })
      const res = total / this.reviews.length
      return res
    },
    numberOfReviews() {
      const res = this.reviews.length
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: bolder;
}
.header {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.left {
  padding-right: 5px;
}
</style>
