# API bookstore dnc
Desafio proposto na formação em tecnologia da Escola DNC. </br>
A aplicação consiste em um CRUD para criação, busca, </br>
atualização e deleção de livros de uma livraria online fictícia.

[Link do projeto front-end](https://github.com/vitormigoto/projeto-react-dnc)

## Rotas
### GET
    Buscar todos os livros
    /livros       
    Buscar livro pelo ID
    /livros/:id   
### POST
    Cadastrar livro
    /livros
### PUT
    Atualizar informações do livro
    /livros/:id
### DELETE
    Deletar livro
    /livros/:id

## Tecnologias utilizadas

- [NodeJs](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org/docs/)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com/)

## Testando o projeto

```bash
# Faça o clone do repositório:

$ git clone https://github.com/Cleidson-Oliveira/api_bookstore_dnc.git

# Entre na pasta que acabou de ser criada:

$ cd api_bookstore_dnc

# Renomeie o arquivo ".env.exemple" para ".env" e preencha a variável com a URL de conecção ao cluster do MongoDB.

# Instale as dependências:

$ npm install

# Rodando o projeto:

$ npm run dev
```

Com o projeto rodando, use Insomnia, Postman ou similares para testar a partir do endereço: http://localhost:3000/livros.
