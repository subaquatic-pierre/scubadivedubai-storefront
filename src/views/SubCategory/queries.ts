import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { SubCategory, SubCategoryVariables } from "./gqlTypes/SubCategory";

export const subCategoryQuery = gql`
  query GetSubCategory($id: ID!) {
    category(id: $id) {
      seoDescription
      seoTitle
      id
      name
      backgroundImage {
        url
      }
      ancestors(last: 5) {
        edges {
          node {
            id
            name
            children(first: 20) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
      children(first: 30) {
        edges {
          node {
            id
            name
            children(first: 30) {
              edges {
                node {
                  name
                  id
                }
              }
            }
            backgroundImage {
              url
            }
          }
        }
      }
    }
  }
`;

export const TypedSubCategoryQuery = TypedQuery<
  SubCategory,
  SubCategoryVariables
>(subCategoryQuery);
