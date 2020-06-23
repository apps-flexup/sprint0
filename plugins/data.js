import createRepository from '~/api/Repository'

export default (ctx, inject) => {
  const repo = createRepository(ctx.$axios)

  const repos = {
    accounts: repo('accounts'),
    charters: repo('charters'),
    contacts: repo('contacts'),
    contractHeaders: repo('contract-headers'),
    contracts: repo('contracts'),
    contractSteps: repo('contract-steps'),
    contractTypes: repo('contract-types'),
    currencies: repo('currencies'),
    formesJuridiques: repo('formesJuridiques'),
    offerHeaders: repo('offer-headers'),
    orderHeaders: repo('order-headers'),
    contactSteps: repo('contact-steps'),
    productHeaders: repo('product-headers'),
    products: repo('products'),
    offers: repo('offers'),
    menu: repo('menu'),
    structures: repo('structures')
  }

  inject('repos', repos)
}
