import prisma from "../../config/db.js";
const userResolver = {
  
    Query: {
        getUser: async (_, { id}) => {
            const user = await prisma.user.findUnique({
                where: {
                    id:Number(id),
                }
            })
            return user;
        }
    },
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
  }
};

export default userResolver;
