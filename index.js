import { ApolloServer } from 'apollo-server';

import typeDefs  from './db/schema.js';
import resolvers from './db/resolvers.js';
import connectDB from './config/db.js';

//Connect to DB
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({url}) => {
    console.log(`server ready on url ${url}`)
})