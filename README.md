# Car Management

Car management é um CRUD de carros.

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

**Server**
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

**Website**
- [AngularJS](https://angularjs.org/)
- [Angular Material](https://material.angular.io/)


### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/) e [Angular CLI](https://angular.io/cli).
Além disto é bom ter um editor para trabalhar com o código como [WebStorm](https://www.jetbrains.com/pt-br/webstorm/) ou [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)
Primeiramente você precisa criar um arquivo chamado **.env** na pasta car-management-api e inserir as seguintes informações:
```bash
MONGO_URL= URL-MONGODB
PORT = 3001
```
**OBS:** Você precisa inserir uma url do MongoDB válida

Para inciar o Back End:

```bash
# Vá para a pasta car-management-api
$ cd car-management-api

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta: 3001 - acesse <http://localhost:3001>
```

### 💻 Rodando o Front End (Web)
Para inciar o Front End:

```bash
# Vá para a pasta car-management-app
$ cd car-management-app

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# O servidor inciará como padrão, na porta: 4002 - acesse <http://localhost:4002/>
```
 
