import prisma from "../../config/db.js";
const userResolver = {
    Mutation: {
        createUser: async (_, { name, email, password }) => {
            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password,
                },
            });
            return newUser;
        },
    },
};
export default userResolver;
