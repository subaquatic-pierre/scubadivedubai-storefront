import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Loader } from "@components/atoms";
import { getGraphqlIdFromDBId } from "../../core/utils";
import { MetaWrapper } from "../../components";
import Page from "./Page";
import { TypedSubCategoryQuery } from "./queries";

type ViewProps = RouteComponentProps<{
  id: string;
}>;

const View: React.FC<ViewProps> = ({ match }) => {
  const variables = {
    id: getGraphqlIdFromDBId(match.params.id, "Category"),
  };
  // Change className
  return (
    <div className="home-page">
      <TypedSubCategoryQuery
        alwaysRender
        displayLoader={false}
        errorPolicy="all"
        variables={variables}
      >
        {({ data, loading }) => {
          if (loading) {
            return <Loader />;
          }
          return (
            <MetaWrapper
              meta={{
                description: data.category ? data.category.seoDescription : "",
                title: data.category ? data.category.name : "",
              }}
            >
              <Page
                backgroundImage={data.category && data.category.backgroundImage}
                category={data && data.category}
              />
            </MetaWrapper>
          );
        }}
      </TypedSubCategoryQuery>
    </div>
  );
};

export default View;
