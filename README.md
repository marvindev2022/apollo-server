# Configuração do Backend Apollo Server

Este é um guia passo a passo para configurar o backend usando Apollo Server no Linux.

## Pré-requisitos

- Node.js e npm instalados
- Git instalado (opcional, se você quiser clonar repositórios)
- Um terminal de sua preferência (ex: Terminal, iTerm, etc.)

## Instalação

- **Clonar o repositório (opcional):**

```bash
   git clone git@github.com:marvindev2022/apollo-server.git
```

- **Acessar o diretório do projeto:**

```bash
   cd apollo-backend
```

- **Instalar as dependências:**

```bash
   npm install
```

- **Compilar o código TypeScript:**

```bash
   npm run compile
```

## Execução

- **Iniciar o servidor:**

```bash
   npm start
```

Agora o backend Apollo Server está em execução.

## Endpoints

- **GET /graphql: Endpoint para consultar dados.**
- **POST /graphql: Endpoint para modificar dados.**

## Código

A configuração básica do servidor Apollo Server está definida no arquivo index.js.

Este arquivo contém:

- Definição dos tipos GraphQL para livros e operações CRUD.
- Implementação dos resolvers para consultar, adicionar, remover e atualizar livros.
- Criação do servidor Apollo e configuração do middleware Apollo GraphQL no Express.
- Você pode encontrar mais detalhes sobre os tipos, operações e resolvers no próprio código.

Claro! Abaixo está um exemplo de como enviar uma consulta (query) e uma mutação usando o Insomnia:

### Consulta (Query)

**URL da Rota:**

```js
   POST http://localhost:4000/graphql
```

**Corpo da Requisição:**

```gql
`
  query {
    books {
      id
      title
      author
    }
  }
`
```

**Headers (opcional):**
  
- Content-Type: application/json

**Enviar a Requisição**
Isso enviará uma consulta GraphQL para obter todos os livros.

### Mutação

1. **URL da Rota:**

```markdown
   POST http://localhost:4000/graphql
```

**Corpo da Requisição:**

```gql
   `mutation {
  addBook(title: "Novo Livro 2", author: "Novo Autor 2") {
    id
    title
    author
  }
}
`
```

**Headers (opcional):**
  
- Content-Type: application/json

**Enviar a Requisição**
Isso enviará uma mutação GraphQL para adicionar um novo livro com o título "Novo Livro" e autor "Autor Desconhecido".

Certifique-se de substituir os valores dos campos de título e autor com os valores desejados.
