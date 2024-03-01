import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const app = express();

// Array de livros para simular um banco de dados simples
let books = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: '2',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Definição dos tipos e operações GraphQL
const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    removeBook(id: ID!): Book
    updateBook(id: ID!, title: String!, author: String!): Book
  }
`;

// Implementação dos resolvers
const resolvers = {
    Query: {
      books: () => books,
      book: (parent, args) => books.find(book => book.id === args.id),
    },
    Mutation: {
      addBook: (parent, args) => {
        const newBook = { id: String(books.length + 1), ...args };
        books.push(newBook);
        return newBook; 
      },
      removeBook: (parent, args) => {
        const index = books.findIndex(book => book.id === args.id);
        if (index !== -1) {
          const removedBook = books.splice(index, 1)[0];
          return removedBook; 
        }
        return null;
      },
      updateBook: (parent, args) => {
        const index = books.findIndex(book => book.id === args.id);
        if (index !== -1) {
          books[index] = { id: args.id, ...args };
          return books[index]; 
        }
        return null;
      },
    },
  };
  

// Criação do servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


(async function startServer() {
    try {
      // Start the Apollo Server
      await server.start();
  
      // Apply the Apollo GraphQL middleware to the Express app
      server.applyMiddleware({ app });
  
      // Define the port for the server to listen on
      const PORT = process.env.PORT || 4000;
  
      // Start the server
      app.listen({ port: PORT }, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
      );
    } catch (error) {
      console.error("Error starting server:", error);
    }
  })()