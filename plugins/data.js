import createRepository from '~/api/Repository'

export default (ctx, inject) => {
  const repo = createRepository(ctx.$axios)

  const repos = {
    charters: repo('charters'),
    products: repo('products'),
    etapes: repo('etapes'),
    contractHeaders: repo('contract-headers'),
    productHeaders: repo('product-headers'),
    contracts: repo('contracts'),
    contractTypes: repo('contract-types'),
    contacts: repo('contacts')
  }

  inject('repos', repos)
}
