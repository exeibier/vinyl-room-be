import { gql } from "apollo-server"

const typeDefs = gql`

    type Vinyl {
        title: String
        artist: String
        price: Int
    }

    input VinylInput {
        title: String
        artist: String
        price: Int
    }

    type Query {
        getVinyls(input: VinylInput!): [Vinyl]
    }
`

export default  typeDefs;