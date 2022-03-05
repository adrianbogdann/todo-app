import { gql } from 'apollo-server-express';

export default gql`

 type User {
     id: Int!
     name: String!
     email: String!
     password: String!
     todos: [Todo!]
 }

 extend type Mutation {
     register(input: RegisterInput!): RegisterResponse
     login(input: LoginInput!): LoginResponse
 }

 type RegisterResponse {
    id: Int!
    name: String!
    email: String!
 }

 input RegisterInput {
     name: String!
     email: String!
     password: String!
 }

input LoginInput {
     email: String!
     password: String!
 }

  type LoginResponse {
    id: Int!
    name: String!
    email: String!
    token: String!
 }
`;