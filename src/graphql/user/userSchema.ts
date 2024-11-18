const userSchema = `#graphql
    scalar Date

    type User {
        id: Int
        name: String
        email: String
        password: String
        created_at: Date
        updated_at: Date    
    }

    type Query{
        getUser(id:String): User
    }

    type Mutation {
        createUser(name: String, email: String, password: String): User
    }
`;
export default userSchema;
