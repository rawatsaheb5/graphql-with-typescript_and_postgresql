import prisma from '../../config/db.js';
const todoResolver = {
    Query: {
        getAllTodos: async () => await prisma.todo.findMany({})
    },
    Mutation: {
        createTodo: async (_, { title, userId }) => {
            const newTodo = await prisma.todo.create({
                data: {
                    title: title,
                    status: "pending",
                    userId: Number(userId)
                }
            });
            console.log(newTodo);
            return newTodo;
        }
    }
};
export default todoResolver;
