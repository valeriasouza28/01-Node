import http from 'node:http' 

const users = []
//cria servidor http 
const server = http.createServer((req, res) =>{
    const {method, url} = req

    
    if(method === 'GET' && url === "/users") {
       // o **res** é onde está a resposta da requisição
       //  o **setHeader** é onde eu forneço um cabeçalho na resposta da requisição com o conteúdo que ela vaibretornar
        return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
        
    }
    if (method === "POST" && url === "/users") {
        users.push({
            id: 1,
            name: "John Doe",
			email: "johndoe@example.com"
        })
        //**resposta da requisição
        // **writeHead()** indica qual o status da requisição que o **201** indica que consiguimos criar algo de forma que de sucesso
        return res.writeHead(201).end()
        
        
    }
    
    console.log(method, url)

    // **writeHead** com **404** significa que a rota não existe    
    return res.writeHead(404).end()
}) 

//determina porta que será ouvida para um servidor localhost
server.listen(3333)
