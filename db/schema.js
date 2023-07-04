import { gql } from "apollo-server"

const typeDefs = gql`

    type Vinyl {
        id: ID
        title: String
        artist: String
        price: Int
    }

    type User {
        id: ID
        name: String
        lastName: String
        email: String
        createdAt: String
    }

    type Token {
        token: String
    }

    input VinylInput {
        title: String
        artist: String
        price: Int
    }

    input UserInput {
        name: String!
        lastName: String!
        email: String!
        password: String!
    }

    input AuthInput {
        email: String!
        password: String!
    }

    type Query {
        getVinyls(input: VinylInput!): [Vinyl]
        getUser(token: String!): User
    }

    type Mutation {
        newUser(input: UserInput): User
        userAuth(input: AuthInput): Token
    }
`

export default  typeDefs;