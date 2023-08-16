import http from 'node:http' 

//cria servidor http 
const server = http.createServer((req, res) =>{
    const {method, url} = req

    if(method === 'GET' && url === "/users") {
        return res.end("Listagem de usuários")

    }

    if (method === "POST" && url === "/users") {
        return res.end("Cria novo usuário")
    }
    
    console.log(method, url)

        return res.end('Hello World!')
}) 

//determina porta que será ouvida para um servidor localhost
server.listen(3333)
