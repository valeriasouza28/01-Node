# Aula 03 e 4

Rotas são caminhos de entradas dentro da aplicação. As otas de do frontend ou de quem está xinsumindo a Api executar diferentes operações  no backend.

Podendo ter rotas para: 

- Criação  de usuários 
- Listagem de usuários 
- Edição de usuários 
- Remoção  de usuários 

Com isso vamos ter que lidar com informações HTTP como:
- Métodos HTTP 
- URL 

E vamos fazer isso utilizando o **req** .Podendo passar 
```js
const method = req.method;
```

Ou usando de desestruturação 
```js
const {method, url} = req;
```

se dermos um 
```js
import http from 'node:http' 

//cria servidor http 
const server = http.createServer((req, res) =>{
    const {method, url} = req
    
    console.log(method, url)

        return res.end('Hello World!')
}) 

//determina porta que será ouvida para um servidor localhost
server.listen(3333)

```

no mesma aba em que o terminal está rodando servidor, isso enquanto o servidor
```bash
GET/
```

em seguida abra outra aba no terminal após ter 
```bash
sudo apt install httpie
```

depois faça a requisição
```bash
http localhost:3333
```

## Métdodos de requisição:
- **GET** => Buscar informações no backend
- POST => Criar um recurso/informação no backend
- **PUT** => Editar/Atualizar alguma informação/recurso do back-end
- **Patch** => Editar/Atualizar uma informação especifica no backend

A diferença entre **PUT** e **PATCH**, imagine que tenha um formulário onde no Put eu teria que alterar o formulário inteiro e usar o Patch para alterar apenas uma informação especifica, como por exemplo um campo "Nome" de um formulário.

Vamos diferenciar as requisições da aplicação com a soma do método e url, ou seja eu posso ter rotas iguais mas com métodos diferentes.

Podemos fazer **if** na aplicação para que consiga difereciar uma rota da outra
```js
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

```

Se salvar isso e fazer uma requisição GET em **http://localhost:3333/users** a mensagem exibida será **Listagem de usuários**

Caso passe uma rota que não existe dentro do **if** ela vai cair dentro 