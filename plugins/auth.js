export default function({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }
  const usr = $auth.user
  const username = $auth.user.username
  console.log('username :', username)
  console.table(usr)
}
