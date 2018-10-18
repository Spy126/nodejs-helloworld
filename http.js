const http = require('http')

const port = 3001

const server = http.createServer((req, res) => {
    res.end('Hello world!')
})

server.listen(port, () => {
    console.log(`Server running at 127.0.0.1:${port}`)
})
