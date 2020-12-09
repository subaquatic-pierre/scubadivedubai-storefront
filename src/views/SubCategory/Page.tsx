import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { generateCategoryUrl, generateSubCategoryUrl } from "../../core/utils";

import { Breadcrumbs, extractBreadcrumbs } from "../../components";

import {
  Category_category_backgroundImage,
  Category_category,
} from "./gqlTypes/SubCategory";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  category: Category_category;
  backgroundImage: Category_category_backgroundImage;
}> = ({ category, backgroundImage }) => {
  console.info(category.children.edges);
  const header: string = category.name || "Sub Category";
  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(category)}
      </script>
      <div
        className="home-page__hero"
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage.url})` }
            : null
        }
      >
        <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              <h1>
                {header}
                {/* <FormattedMessage defaultMessage={header} /> */}
              </h1>
            </span>
          </div>
        </div>
      </div>
      <div className="home-page__categories">
        <div className="container">
          <Breadcrumbs breadcrumbs={extractBreadcrumbs(category)} />
          {/* <h3>
              <FormattedMessage defaultMessage="Shop by category" />
            </h3> */}
          <div className="home-page__categories__list">
            {category.children.edges.map(({ node: category }) => (
              <div key={category.id}>
                <Link
                  to={
                    category.children.edges.length > 0
                      ? generateSubCategoryUrl(category.id, category.name)
                      : generateCategoryUrl(category.id, category.name)
                  }
                  key={category.id}
                >
                  <div
                    className={classNames(
                      "home-page__categories__list__image",
                      {
                        "home-page__categories__list__image--no-photo": !category.backgroundImage,
                      }
                    )}
                    style={{
                      backgroundImage: `url(${
                        category.backgroundImage
                          ? category.backgroundImage.url
                          : noPhotoImg
                      })`,
                    }}
                  />
                  <h3>{category.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
