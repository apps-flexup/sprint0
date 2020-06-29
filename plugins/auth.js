export default function({ $auth }) {
  console.log('$auth value', $auth)
  if (!$auth) return
  console.log('is logged in', $auth.loggedIn)
  if (!$auth.loggedIn) {
    console.warn('!plop')
    return
  }
  console.log('Fetch User', $auth.loggedIn)
  const usr = $auth.fetchUser()
  const username = $auth.user.username
  debugger
  console.log('username :', username)
  console.table(usr)
}
// .then((res) => {
//   console.log('res', this.$auth)
//   debugger
//   //       curl -X GET 'http://localhost:10001$auth/admin/realms/development/users' \
//   // -H "Accept: application/json" \
//   // -H $Authorization: Bearer $ACCESS_TOKEN" | jq .
// })
// export default async function ({ app }) {git p
//   console.log($auth executed')
//   if (!app.$auth.loggedIn) {
//     return
//   }

//   const$auth = app.$auth;

//   const$authStrategy =$auth.strategy.name;
//   if $authStrategy === 'facebook' ||$authStrategy === 'google') {
//     const token =$auth.getToken$authStrategy).substr(7);
//     const$authStrategyConverted =$authStrategy === 'facebook' ? 'fb' : 'google';
//     const url = `/user/signup/$$authStrategyConverted}?token=${token}`;

//     try {
//       const { data } = await app.$axios.$post(url, null);
//      $auth.setToken('local', "Bearer " + data.access_token);
//       setTimeout(async () => {
//        $auth.setStrategy('local');
//         setTimeout(async () => {
//           await$auth.fetchUser();
//         })
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
