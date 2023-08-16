# Aula 02

```bash
npm init -y
```

common js uma maneira de fazer importação usando require
```js
const http = require('http')
```

Outra maneira de se fazer a importação de biblitecas do node é usando **ESModules**  e para fazer com que o node suporte o **ESModules** no arquivo **package.json**

```json
"type": "module",
```
Para diferenciar um módulo de terceiro como de um framework ou biblioteca de um módulo inteeno do node
Uma das maneiras de diferenciar isso é usando **node:** seguido do nome do módulo 
```js
import http from 'node:http'
```` 

e para a função do **server** passamos como parâmetros **req** e **res** abreviação para request e response.

E no **req** vamos armazenar informações de quem está fazendo as requisições do nosso servido. 
```js
const server = http.createServer(() =>{
    return res.end('Hello World!')
}) 

```
Execute no terminal
 ```bash
 node server.js 
 ````

 Pra fazer rquisições http
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

 Para que cada vez que atualizar algo na aplicação não precisamos parar o seevidor e rodar novamente no arquivo **package.json** dentro de **script** altere o script **test** já existente para
 ```js
 "scripts": {
  
  "dev": "node --watch src/server.js"
 }
  
 ``` 