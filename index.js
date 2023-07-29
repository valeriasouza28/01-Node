import http from 'node:http' 

//cria servidor http 
const server = http.createServer((req, res) =>{
    return res.end('Hello World!')
}) 

//determina porta que será ouvida para um servidor localhost
server.listen(3333)
