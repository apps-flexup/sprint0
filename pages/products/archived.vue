<template lang="pug">
.fv-archived-product-page-index
  fv-product-index(
    :archivedProductPage="true"
    tableName="archivedProducts"
    tableComponent="fv-product-archived-data-table"
  )
</template>
