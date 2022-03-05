import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/schemas/index.js';
import resolvers from '../graphql/resolvers/index.js';
import context from '../graphql/context/index.js';
import cors from 'cors';

const app = express();

app.use(cors());

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,
    playground: {
        settings: {
            'schema.polling.enable': false,
        },
    },
});

await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/api' });

const server = createServer(app);

export default server;