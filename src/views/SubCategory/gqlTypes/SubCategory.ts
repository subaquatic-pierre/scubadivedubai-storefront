/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Category
// ====================================================

export interface Category_category_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface Category_category_children_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface Category_category_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: Category_category_children_backgroundImage;
  children: Category_category_children;
}

export interface Category_category_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Category_category_children_edges_node;
}

export interface Category_category_children {
  __typename: "CategoryCountableConnection";
  edges: Category_category_children_edges[];
}

export interface Category_category {
  __typename: "Category";
  seoDescription: string | null;
  seoTitle: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: Category_category_backgroundImage | null;
  /**
   * List of children of the category.
   */
  children: Category_category_children | null;
}

export interface SubCategory {
  /**
   * Look up a category by ID or slug.
   */
  category: Category_category | null;
}

export interface SubCategoryVariables {
  id: string;
}
