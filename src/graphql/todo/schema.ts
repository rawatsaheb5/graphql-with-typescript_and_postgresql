

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


`
export default todoSchema;