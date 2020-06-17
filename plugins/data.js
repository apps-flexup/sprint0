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
    partnerSteps: repo('partner-steps'),
    productHeaders: repo('product-headers'),
    offers: repo('offers'),
    structures: repo('structures')
  }

  inject('repos', repos)
}
