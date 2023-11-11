const express = require('express')
const app = express()

function get_access_token() {
    const auth = `${CLIENT_ID}:${CLIENT_SECRET}`
    const data = 'grant-type=client_credentials'
    return fetch(endpoint_url + '/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `${Buffer.from(auth).toString('base64')}`
      },
      body: data
    })
      .then(res => res.json())
      .then(json => json.access_token)
  }

const checkout = {
    check: 'yes!'
}

app.get('/', (request, response) => {
    response.send('<h1>Hello Mau!</h1>')
})

app.get('/create_order', (request, response) => {
    response.json(checkout)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
