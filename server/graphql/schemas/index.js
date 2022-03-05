import { gql } from "apollo-server-express";
import userType from './user.js';
import todoType from './todo.js';

const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }
 `;

export default [rootType, userType, todoType];