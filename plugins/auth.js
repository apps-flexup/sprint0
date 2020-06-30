export default function({ $auth }) {
  if (!$auth) return
  if (!$auth.loggedIn) {
    return
  }
  const username = $auth.user.preferred_username
  console.log('username :', username)
}
