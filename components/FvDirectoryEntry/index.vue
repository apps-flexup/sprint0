<template lang="pug">
.fv-directory-entry
  v-list-item
    v-list-item-avatar
      v-img(:src="entry.avatar")
    v-list-item-content
      v-row.align-center.mr-5.ml-2
        h3 {{ entry.name }}
        div.ml-5.font-weight-thin {{ $displayRules.accountType(entry)}}
</template>

<script>
export default {
  name: 'FvDirectoryEntry',
  props: {
    entry: {
      type: Object,
      default() {
        return null
      },
    },
  },
}
</script>
