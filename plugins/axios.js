export default function ({ $axios, error: nuxtError }) {
  $axios.onRequest((config) => {
    config.headers['Content-Type'] = 'application/json'
    config.url.split('/').includes('api2') ? config.headers['Authorization'] = 'Token 08582a913f9d27ba7124645843ec2d3ad121597a' : false
  })

  $axios.onError((error) => {
    const statusCode = error.response?.status
    const message = error.message || 'Server error'

    // if ([404].includes(statusCode)) {
    //   nuxtError({ statusCode, message })
    // }
  })
}
