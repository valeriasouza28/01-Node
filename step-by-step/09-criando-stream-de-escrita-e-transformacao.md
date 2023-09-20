# Fundamentos do node - Aula 09

Vamos criar uma stream de leitura, a stream de escrita diferentr da stream de leitura ela vai receber dados de uma stream de leitura como a criada anteriormente e vai fazer alguma coisa.

Fazemos a importação de **Writable**
```js
import { Writable } from "node:stream";
```

Em seguida cria uma outra classe
```js
class MultiplyByFanStream extends Writable {

    
}
```

E essa classe ela vai pegar os daddos da stream de leitura e vai pegar esses números e vai multiplicar por 10
```js
class MultiplyByFanStream extends Writable {
    _write(chunck, encoding, callback) {

    }

```

Dentro dessa classe foi criado o método **_write** que recebe três parâmetros, o **chunck** é o pedaço que fou lido da stream de leitura que está dentro de **this.push(buf)**, tudo que é enviado no **this.push** na stream de leitura é um **chunck**. O **encoding** é como essa informação 3 codificada. O **callback** é uma função que a stream de escrita precisa chamar quqndo ela terminou de fazer o que ela precisava com aquela informação, dentro de uma stream de escrita não retornamos nada, ela processa os dados, ela nunca vai transformar um dados em alguma outra coisa, nesse caso eu apenas processar os dados usando **console.log** e passar o **chunck** como argumento
```js
_write(chunck, encoding, callback) {
	
	console.log(chunck)
    
    }

```
O **chunck** é um buffer, então é necessário converter ele para String, e o buffer ele tem mlum método chmado **toString** 

```js
class MultiplyByFanStream extends Writable {
    _write(chunck, encoding, callback) {
		console.log(Number(chunck.toString()) * 10)
		callback()
    }
}

new OneToHundredStream().pipe(new MultiplyByFanStream())
```

Adiciona a chamada de **callback()** ao método **_write**. E na parte de criar um objeto **OneToHundredStream** passamos como argumento para o **pipe** a criaçao de um novo objeto **MultiplyByFanStream**.

Agora vamos entender sobre streams de transformação importando **Transform**
```js
import { Readable, Writable, Transform } from "node:stream";
```

As streams de tranformação serve para transformar um dado um dafo em outro, um chunck em outro. Vamos criar uma stream que converte todo número positivo em negativo

```js
class InverseNumbersStreams extends Transform {
  _transform(chunk, encoding, callback) {
    
  }
}
```
criamos uma classe que se extende de **Transform** e ela contém o método **_transform** que recebe como argumento **chunk, encoding, callback**. Dentro desse método eu vou pegar o dado usando chunck convertendo para string e convertendo em number novamente e multiplica esse resulto por -1
```js
const transformed = Number(chunck.toString()) * -1

```

chamo o **callback**
```js
const transformed = Number(chunck.toString()) * -1
callback(null, transformed)
```

Passo como primeiro parâmetro **null**, o primeiro parâmetro de um **callback** é o erro, então eu envio esse parâmetro como nulo caso não tenha dado nenhum erro dentro do código anterior.

E o segundo parâmetro é a conversão que será o **tranformed** 

e embaixo adiciona **.pipe(newInverseNumbersStreams)**

```js

new OneToHundredStream()
.pipe(newInverseNumbersStreams)
.pipe(new MultiplyByFanStream())
```

A stream de tranformação precisa obrigatoriamente ler dados de algum lugar e escrever dados para outro lugar. Mas executar dessa maneira irá dar um erro é necessário enviar o **transformed** como **Buffer**
```js
    callback(null, Buffer.from(String(transformed)))
```

Existe também um outro tipo de stream que a stream **Duplex** que ela podevtanto método de leitura quanto o método de escrita