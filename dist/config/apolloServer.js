import { ApolloServer } from "@apollo/server";
import todoSchema from "../graphql/todo/schema.js";
import todoResolver from "../graphql/todo/resolver.js";
const apolloServer = new ApolloServer({
    typeDefs: todoSchema,
    resolvers: todoResolver
});
export default apolloServer;
