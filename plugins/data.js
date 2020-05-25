import createRepository from '~/api/Repository'

export default (ctx, inject) => {
  const repo = createRepository(ctx.$axios)

  const repos = {
    contracts: repo('contracts'),
    contract_types: repo('contract_types'),
    partners: repo('partners')
  }

  inject('repos', repos)
}
