<template lang="pug">
.index
  fv-recursive-data-table(
    :headers="mainHeaders"
    :items="mainItems"
  )
</template>

<script>
export default {
  data() {
    return {
      sortKey: null,
      shouldSortDesc: false
    }
  },
  computed: {
    mainHeaders() {
      const res = [
        {
          text: 'Produit',
          value: 'products',
          align: 'center',
          sortable: false
        },
        {
          text: 'Offre',
          value: 'offers',
          align: 'center',
          sortable: false
        }
      ]
      return res
    },
    mainItems() {
      const res = [
        {
          headers: {
            products: this.productHeaders,
            offers: this.offerHeaders
          },
          items: this.offerItems
        }
      ]
      return res
    },
    productHeaders() {
      const res = [
        {
          text: 'Libelle',
          value: 'libelle',
          align: 'center'
        },
        {
          text: 'Categorie',
          value: 'category',
          align: 'center'
        },
        {
          text: 'Variante',
          value: 'variante',
          align: 'center'
        },
        {
          text: 'Annotation',
          value: 'annotation',
          align: 'center'
        },
        {
          text: 'Unite',
          value: 'unit',
          align: 'center'
        }
      ]
      return res
    },
    offerHeaders() {
      const res = [
        {
          text: 'Prix TTC',
          value: 'price',
          align: 'center'
        },
        {
          text: 'Stock',
          value: 'stock',
          align: 'center'
        }
      ]
      return res
    },
    offerItems() {
      const res = [
        {
          libelle: 'Chaussettes',
          category_id: 55,
          variante: 'Bleue',
          annotation: 'Edition noel',
          unit: 'Unité',
          price: 24,
          stock: 42
        },
        {
          libelle: 'Gros pull',
          category_id: 3,
          variante: 'Rouge',
          annotation: 'Edition noel',
          unit: 'Unité',
          price: 12,
          stock: 12
        }
      ]
      Array.prototype.sortOn = function(key) {
        this.sort(function(a, b) {
          if (a[key] < b[key]) {
              return -1;
          } else if (a[key] > b[key]) {
              return 1;
          }
          return 0;
        });
      }
      if (this.sortKey) {
        res.sortOn(this.sortKey)
      }
      if (this.shouldSortDesc)
        res.reverse()
      return res
    }
  },
  methods: {
    sortBy(v) {
      if (v[0])
        this.sortKey = v[0]
      else
        this.sortKey = null
    },
    sortDesc(v) {
      if (v[0])
        this.shouldSortDesc = v[0]
      else
        this.shouldSortDesc = false
    },
    getColumnSlot(key) {
      console.log('pouet: ', 'item.' + key)
      return 'item.' + key
    }
  }
}
</script>
