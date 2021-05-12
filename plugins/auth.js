export default function({ $auth, store }) {
  if (!$auth.loggedIn) {
    // effacement des stores..
    // $store.dispatch('accounts/clear')
    return
  }
  // const username = $auth.user.preferred_username
  store.dispatch('accounts/get')
  store.dispatch('users/get').then(() => {
    const users = store.getters['users/all']
    const userId = $auth.user.sub
    const connectedUser = $auth.user
    let found = false
    let i = -1
    while (!found && i < users.length - 1) {
      i++
      if (users[i].uuid === userId) {
        found = true
      }
    }
    if (!found) {
      store.dispatch('users/add', connectedUser)
    }
  })
}
