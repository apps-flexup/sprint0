export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)

    // config.headers['Content-Type'] = 'application/json'
    // config.headers['Access-Control-Allow-Origin'] = "*"

    // config.headers.common.Origin = 'https://json-server.jbeardst.one'
    // config.headers.common['Content-Type'] = 'application/json'
    // config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    // config.headers.common.Accept = 'application/json'

    // config.headers.put.Authorization = localStorage.getItem('auth._token.keycloak')
    // config.headers.post.Authorization = localStorage.getItem('auth._token.keycloak')
    // config.headers.common.Authorization = localStorage.getItem('auth._token.keycloak')
    // config.headers.put['Origin'] = 'https://json-server.jbeardst.one'
    // config.headers.put['Content-Type'] = 'application/json'
    // config.headers.put['Accept'] = 'application/json'

    // config.headers.post['Origin'] = 'https://json-server.jbeardst.one'
    // config.headers.post['Content-Type'] = 'application/json'
    // config.headers.post['Accept'] = 'application/json'

    // config.headers.delete['Origin'] = 'https://json-server.jbeardst.one'
    // config.headers.delete['Content-Type'] = 'application/json'
    // config.headers.delete['Accept'] = 'application/json'
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log('Erreur :', error)
    if (code === 400) {
      redirect('/400')
    }
  })
}
