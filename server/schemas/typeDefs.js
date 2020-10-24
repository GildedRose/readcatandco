const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Product {
        _id: ID
        name: String
        price: Float
        description: String
        image: String
        category: Category
    }

    type Category {
        _id: ID
        name: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        product(_id: ID!): Product
        products(category: ID, name: String): [Product]
        categories: [Category]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;