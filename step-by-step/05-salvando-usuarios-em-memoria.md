# Aula 05

Nessa aula vamos salvar os usuários criados ou listados dentro da memòria da aplicação. 

No node tudo que for criado de variável irá ficar salvo em memória, usando de um conceito chamado **Statefull**. 

No node temos dois conceitos **Statefull** e **Stateless**, a diferença de uma aplicação **Statefull** para uma aplicação **Stateless** é que a aplicação **Statefull** sempre vai ter alguma coisa salva em memòria e ela depende de informações que são salvas em memória para que ela continue funcionando, a partir do momento que essa aplicação gor derrubada ela pode funcionar de maneira diferente que ela estava funcionando antes.

Enquanto uma aplicação **Stateless** onde ela não salva nada em memória, geralmente ela vai salvar as informações em dispositivos externos como banco de dados, arquivos de texto, ou algo parecido, independete de parar a aplicação e rodar novamente vai se manter igual.

Por enquanto vamos seguir com **Statefull**. Vamos criar um array de usuários
```js
const users = []
```

Dentro rota `POST` de `/users` vamos adicionar um novo usuário dentro do array `users`
```js
if (method === "POST" && url === "/users") {
        users.push({
            id: 1,
            name: "John Doe",
			email: "johndoe@example.com"
        })
                return res.end("Cria novo usuário")
        

    }
```

Dentro rota `GET` de `/users` fazer com que ela retorne o array `users` e ao fazer isso por estar usando um array e a forma correta de fazer isso é usando Json
```js
if(method === 'GET' && url === "/users") {
        return res.end(JSON.stringify(users))
		
    }
```

Uma maneira de o front-end saber que recebeu a requisição é usando os cabeçalhos.

- **Cabeçalhos :** (Requisição/resposta) => Metadatas/metadados que são informaçöes que define a forma como o frontend ou backend irá interpretar a `resposta` .

para definir o cabeçalho para a `resposta` utiliza o método `setHeader`