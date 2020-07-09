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
    formesJuridiques: repo('formesJuridiques'),
    menu: repo('menu'),
    offerHeaders: repo('offer-headers'),
    offers: repo('offers'),
    orderHeaders: repo('order-headers'),
    orders: repo('orders'),
    partnerHeaders: repo('partner-headers'),
    partners: repo('partners'),
    productHeaders: repo('product-headers'),
    products: repo('products'),
    structures: repo('structures'),
    team: repo('team'),
    units: repo('units')
  }

  inject('repos', repos)
}
