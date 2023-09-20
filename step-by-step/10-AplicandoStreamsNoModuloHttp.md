# Fundamentos do node - Aula 10

Saindo um pouco do exemplo anterior, vamos criar um novo arquivo **StreamsHttpServer.js** e vamos começar criando um servidor

```js
import http from "node:http";

const server = http.createServer((req, res) => {
  
})

server.listen(3334)
```

cria um novo arquivo chamado **fake-upload-to-http-stream.js**

```js
import {Readable} from "node:stream"

class OneToHundredStream extends Readable {
    //construtor implicito
    index = 1
    _read () {
    const i = this.index++

    setTimeout(() => {
        if (i > 100) {
            //usa o **push** passando como argumento null fazendo com que eu não tenha maia nenhuma informação para ser enviada de dentro dessa stream
            this.push(null)
        } else {
            const buf = Buffer.from(String(i));
            // sw o **i** não chegou a 100 ainda eu vou enviar **i**
            this.push(buf)
        }
      
    
    }, 1000) 
}
    
}
```

O node a partir da versão 18 já supprta a Fetch API nativamente, e ela uma API completa para trabalhar com requisições e respostas dentro da web, ela é usada tanto no browser quanto node. Ela serve para fazer requisições de uma aplicação para outra de um endereço para outro.

então no arquivo que acabou de ser criado, faz a chamada de **fetch()** passando como argumento a URL e também o método **POST**

```js
fetch("http://localhost:3334", {
  method: "POST",
})
```

Eu uso o método Post porque para simular que estou enviando uma informação aos poucos no backend. A stream em uma requisição ela só pode ser enviada se for o método **POST** ou **PUT**.

E também passo o corpo da requisisão POST chamando **OneToHundredStream**
```js
fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream()
})
```

Vamos copiar do arquivo **fundamentos.js** a classe **InverseNumberStream** e colar no arquivo **StreamsHttpServer** 
```js
const server = http.createServer((req, res) => {
  class InverseNumbersStreams extends Transform {
    _transform(chunck, encoding, callback) {
      const transformed = Number(chunck.toString()) * -1
      callback(null, Buffer.from(String(transformed)))
    }
  }
})
```
E nesse mesmo arquivo vamos importar o método de stream **Transform**
```js
