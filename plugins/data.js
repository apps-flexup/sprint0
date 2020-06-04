import createRepository from '~/api/Repository'

export default (ctx, inject) => {
  const repo = createRepository(ctx.$axios)

  const repos = {
    charters: repo('charters'),
    contacts: repo('contacts'),
    contractHeaders: repo('contract-headers'),
    contracts: repo('contracts'),
    contractTypes: repo('contract-types'),
    currencies: repo('currencies'),
    etapes: repo('etapes'),
    productHeaders: repo('product-headers'),
    products: repo('products'),
    structures: repo('structures')
  }

  inject('repos', repos)
}
