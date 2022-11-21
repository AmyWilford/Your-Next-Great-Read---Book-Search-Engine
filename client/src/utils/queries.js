import { gql } from "@apollo/client";

// Define the speific information we want to collect from the 'me' query - save in variable GET_ME
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
