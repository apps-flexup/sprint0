import createRepository from '~/api/Repository'

export default (ctx, inject) => {
  const repo = createRepository(ctx.$axios, ctx.store)

  const repos = {
    accounts: repo('accounts'),
    categories: repo('categories'),
    charters: repo('charters'),
    contacts: repo('contacts'),
    contactSteps: repo('contact-steps'),
    orderSteps: repo('order-steps'),
    contractHeaders: repo('contract-headers'),
    contracts: repo('contracts'),
    contractSteps: repo('contract-steps'),
    contractTypes: repo('contract-types'),
    countries: repo('countries'),
    currencies: repo('currencies'),
    legalStructure: repo('legal-structure'),
    manageMenu: repo('manageMenu'),
    userMenu: repo('userMenu'),
    accountMenu: repo('accountMenu'),
    buyerMenu: repo('buyerMenu'),
    sellerMenu: repo('sellerMenu'),
    globalMenu: repo('globalMenu'),
    offerHeaders: repo('offer-headers'),
    offerSteps: repo('offer-steps'),
    offers: repo('offers'),
    orderHeaders: repo('order-headers'),
    orderLineHeaders: repo('order-line-headers'),
    orders: repo('orders'),
    thirdPartyAccountSteps: repo('third-party-account-steps'),
    thirdPartyAccountHeaders: repo('third-party-account-headers'),
    thirdPartyAccounts: repo('third-party-accounts'),
    productHeaders: repo('product-headers'),
    productSteps: repo('product-steps'),
    products: repo('products'),
    settings: repo('settings'),
    structures: repo('structures'),
    team: repo('team'),
    units: repo('units')
  }

  inject('repos', repos)
}
