const {gql} = require('apollo-server');
const typeDefs = gql`

query getTracks {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}


type Query {
    "Get tracks for our homepage grid"
    tracksForHome: [Track!]!
}

type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"    
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String!
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
}

type Author{
    id: ID!
    name: String!
    photo: String

}
  # Schema definitions go here
`;
module.exports = typeDefs;