var http = require('http')

http.createServer((req, res) =>{
    res.write("Welcome to Backend")
    res.end()
}).listen(8080)