import gql from "graphql-tag";

export const indexQuery = gql`
  query IndexQuery {
    fontFamilies(first: 5) {
      id
      __typename
      family
      fonts {
        __typename
        id
        numGlyphs
        ascender
        descender
      }
    }
  }
`;
