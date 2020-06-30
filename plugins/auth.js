export default function({ $auth }) {
  if (!$auth.loggedIn) {
    // effacement des stores..
    // $store.dispatch('accounts/clear')
    return
  }
  const username = $auth.user.preferred_username
  console.log('username :', username)
}
