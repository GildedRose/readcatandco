import gql from 'graphql-tag';

export const QUERY_USER = gql `
    query user($email: String!) {
        user(email: $email) {
            _id
            firstName
            lastName
            email
        }
    }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;