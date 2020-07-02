export default function({ $auth, store, redirect, app}) {
  if (!$auth.loggedIn) {
    // effacement des stores..
    // $store.dispatch('accounts/clear')
    return
  }
  // const username = $auth.user.preferred_username
  store.dispatch('accounts/get')
}
