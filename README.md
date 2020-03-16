 # node4noobs

Passo a passo criando um server básico usando node.js e express.js

 ## Iniciar o projeto

Após criar um diretório para o projeto, executar os seguites passos no terminal:

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



