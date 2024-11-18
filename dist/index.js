import express from 'express';
const app = express();
import dotenv from 'dotenv';
import apolloServer from './config/apolloServer.js';
import { expressMiddleware } from '@apollo/server/express4';
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use('/', (req, res) => {
    return res.json({ status: 200, message: "everything is ok" });
});
const startApolloServer = async () => {
    await apolloServer.start();
    app.use('/graphql', expressMiddleware(apolloServer));
};
startApolloServer();
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
});
