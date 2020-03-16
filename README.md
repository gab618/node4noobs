 # node4noobs

Passo a passo criando um server básico usando node.js e express.js

 ## Iniciando o projeto

Após criar um diretório para o projeto, é necessário executar os seguintes passos no terminal:

* ```yarn init -y``` para iniciar o projeto com o arquivo ```package.json```
* ```yarn add express``` para adicionar o express ao projeto
* Criar o ```index.js``` do projeto

## Preparando o express

O primeiro passo para utilizar o express é importar a biblioca e atribuíla a uma variável.
```js
const express = require('express');
```
Feito isso podemos instanciar a  aplicação. Para isso criamos uma variável que recebe o método do ```express()```
```js
const app = express();
```
Com o app criado, é necessário que ele escute alguma porta para que possamos utilizá-lo no navegador. Para isso usaremos o método ```listen()``` com a porta desejada.
```js
app.listen(3000);
```

Feito isso, o servidor já estará disponível para acesso no endereço ```http://localhost:3000```


## Hello World

O servidor já está pronto, mas não exibe nada. Para criar um Hello World utilizaremos o método get do app. O método espera como parâmentos uma rota e uma outra função com os argumentos de requisição e resposta:
```js
app.get('/', (req, res) => {
    res.send('Hello World');
});
```
Utilizando a rota '/', teremos uma resposta na raiz do nosso servidor ```http://localhost:3000/```. A partir do argumento de resposta (res, no explo acima) podemos utilizar o método ```send()``` passando uma string que será retornada na nossa rota.

___

## Tipos de parâmetros

Considere a rota ```http://localhost:3000/exemplo```

### Query
Os parâmetros do tipo query são passados na própria url, após o caracter '?' e separados pelo caracter '&'

```http://localhost:3000/exemplo?nome=gabriel&idade=22```

No exemplo acima, estamos passando na rota ```/exemplo``` o ```nome``` e a ```idade```. Podemos ter acesso a esses dados a partir do ```req``` 

```js
app.get('/exemplo', (req, res) => {
    const nome = req.query.nome;
    res.send(`Hello ${nome}`);
});
```
No req.query estarão todos os parametros passados pela url, os query params

### Route

Os parâmetros do tipo route são aqueles que já são esperado dentro da própria rota. Para marcar uma parâmetro desse tipo, é necessário adicionar o caracter ':' antes do seu nome durante a implementação.

```js
app.get('/exemplo/:id', (req, res) => {
    const id = req.params.id;
    res.send(`O id é ${id}`);
});
```

No exemplo acima criamos o parâmetro chamado ```id```. É possivel ter acesso aos parâmetros do tipo route através de ```req.params```.

Ao acessar ```http://localhost:3000/exemplo/1``` , teremos como resposta ```O id é 1```


### Body
