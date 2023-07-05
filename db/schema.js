import { gql } from "apollo-server"

const typeDefs = gql`

    type Vinyl {
        id: ID
        title: String
        artist: String
        price: Int
        image: String
        discount: Int
        edition: String
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
        title: String!
        artist: String!
        price: Int!
        image: String!
        discount: Int
        edition: String
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
        getVinyls: [Vinyl]
        getVinyl(id: ID!): Vinyl
        getUser(token: String!): User
    }

    type Mutation {
        newUser(input: UserInput): User
        userAuth(input: AuthInput): Token
        newVinyl(input: VinylInput): Vinyl
        editVinyl(id: ID!, input: VinylInput): Vinyl
        deleteVinyl(id: ID!): String
    }
`

export default  typeDefs;