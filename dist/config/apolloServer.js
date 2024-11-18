import { ApolloServer } from "@apollo/server";
import userSchema from "../graphql/user/userSchema.js";
import userResolver from "../graphql/user/userResolver.js";
const apolloServer = new ApolloServer({
    typeDefs: userSchema,
    resolvers: userResolver
});
export default apolloServer;
