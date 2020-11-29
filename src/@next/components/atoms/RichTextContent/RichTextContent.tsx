/* eslint-disable react/no-danger */

import { sanitize } from "dompurify";
import draftToHtml from "draftjs-to-html";
import React from "react";

import { IProps } from "./types";

interface Block {
  key: string;
  data: any;
  text: string;
}

const buildString = (descriptionJson: string) => {
  const { blocks } = JSON.parse(descriptionJson);
  const stringArr: string[] = [];
  blocks.map((obj: Block) => stringArr.push(obj.text));
  return stringArr.join("");
};

// Used as previous method to display draft js editor data
// sanitize(draftToHtml(JSON.parse(descriptionJson)))

// buildString(descriptionJson)

export const RichTextContent: React.FC<IProps> = ({
  pageType,
  descriptionJson,
}) => (
  <>
    {descriptionJson && pageType === "article" ? (
      <div
        dangerouslySetInnerHTML={{
          __html: buildString(descriptionJson),
        }}
      />
    ) : (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(draftToHtml(JSON.parse(descriptionJson))),
        }}
      />
    )}
  </>
);
