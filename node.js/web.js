const http = require('http')
const fs = require('fs')

let server = http.createServer(
  (request, response) => {
    fs.readFile('./index.html', 'utf-8',
      (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(data)
        response.end()
      })
  })

server.listen(3000, '10.0.2.15')
