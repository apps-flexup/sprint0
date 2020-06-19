export default function({ $auth }) {
  if (!$auth) return
  debugger
  if (!$auth.loggedIn) {
    console.warn('!plop')
    return
  }
  const usr = $auth.user
  const username = $auth.user.username
  console.log('username :', username)
  console.table(usr)
}
