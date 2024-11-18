

const todoSchema = `#graphql
    scalar Date

    type Todo {
        id : Int
        title:String
        created_at:Date
        updated_at:Date
        userId:Int
        status :String

    }

    type Query{
        getAllTodos: [Todo]
    }

    type Mutation{
        createTodo(title:String, userId:String):Todo
    }

`
export default todoSchema;