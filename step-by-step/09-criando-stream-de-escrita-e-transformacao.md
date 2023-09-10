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

# Tempo de video 03:14