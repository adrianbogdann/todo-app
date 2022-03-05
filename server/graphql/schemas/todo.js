import { gql } from 'apollo-server-express';

export default gql`

 type Todo {
     id: Int!
     content: String!
     author: User!
     status: String!
     createdAt: String

 }

extend type Query {
    getAllTodos: [Todo!]
    getSingleTodo(todoId: Int!): Todo
}

 extend type Mutation {
     createTodo(content: String!): CreateTodoResponse
 }

 type CreateTodoResponse {
    id: Int!
    content: String!
    createdAt: String!
 }

`;