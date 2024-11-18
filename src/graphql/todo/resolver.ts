
import prisma from '../../config/db.js'
const todoResolver = {
    Query: {
        getAllTodos : async()=> await prisma.todo.findMany({})
    }
}

export default todoResolver;