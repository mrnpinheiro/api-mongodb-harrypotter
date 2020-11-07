# API Harry Potter

A API armazena dados dos personagens do mundo de Harry Potter através do MongoDB, seguindo o design MVC.

Método | Rota |	Descrição |
-----| ------- | --------- |
GET |`/potter` |	Retorna todos os personagens.
GET |`/potter/:id` |	Retorna um personagem dado um parâmetro id.
POST | `/potter/` |	Adiciona um personagem.
PUT | `/potter/:id` |	Altera dados de um personagem a partir de um parâmetro id.
DELETE | `/potter/:id` |	Deleta um personagem a partir de um parâmetro id.

## Importando o JSON para o MongoDB
A importação foi feita localmente:
`mongoimport --db=reprograma --collection=potter --jsonArray --file=./src/data/potter.json`
O JSON usado para manipulação dos dados está disponível [neste repositório](https://github.com/mrnpinheiro/api-mongodb-harrypotter/blob/master/src/data/potter.json).

### Ferramentas utilizadas

* Node.js
* Express
* Cors
* Nodemon
* Mongoose

#### Para iniciar dê um **npm install** e **npm start**!