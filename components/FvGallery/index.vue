<template lang="pug">
.fv-gallery
  v-row
    v-col(cols="2")
      v-item-group(
        :mandatory="true"
        :multiple="false"
      )
        v-row(
          v-for="image in images"
          :key="image.alt"
        )
          v-item
            v-img.thumb(
              :src="image.src"
              :alt="image.alt"
              :aspect-ratio="1"
              @click="select(image)"
            )
    v-col(cols="10")
      v-img(
        :src="selected.src"
        :alt="selected.alt"
        :aspect-ratio="1"
      )
</template>

<script>
export default {
  name: 'FvGallery',
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selected: this.images.length > 0 ? this.images[0] : {}
    }
  },
  methods: {
    select(image) {
      this.selected = image
    }
  }
}
</script>

<style scoped>
.thumb {
  margin-bottom: 10px;
}
</style>
