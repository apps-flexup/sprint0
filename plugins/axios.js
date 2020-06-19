export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('def :', process.env)
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log('Erreur :', error)
    if (code === 400) {
      redirect('/400')
    }
  })
}
