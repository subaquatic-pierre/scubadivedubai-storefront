import React from "react";
import { FormattedMessage } from "react-intl";

import { RichTextContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

enum TABS {
  DESCRIPTION,
  ATTRIBUTES,
}

export const ProductDescription: React.FC<IProps> = ({
  description = "",
  descriptionJson = "",
  attributes,
}: IProps) => {
  const [activeTab, setActiveTab] = React.useState<TABS>(TABS.DESCRIPTION);

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.TabTitle
          active={activeTab === TABS.DESCRIPTION}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
        >
          <FormattedMessage defaultMessage="OVERVIEW" />
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.ATTRIBUTES}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.ATTRIBUTES);
          }}
        >
          <FormattedMessage defaultMessage="SPECS" />
        </S.TabTitle>
      </S.Tabs>
      {activeTab === TABS.DESCRIPTION &&
        (descriptionJson ? (
          <RichTextContent descriptionJson={descriptionJson} />
        ) : (
          <p>{description}</p>
        ))}
      {activeTab === TABS.ATTRIBUTES && (
        <S.AttributeList>
          {attributes &&
            attributes.map((attribute, index) => {
              const attrVals = attribute.values.map(value => value.name);
              if (attrVals.length !== 0) {
                return (
                  <li key={index}>
                    <S.AttributeName>
                      {attribute.attribute.name}:{" "}
                    </S.AttributeName>{" "}
                    <S.AttributeValue>
                      <span>
                        {attribute.values.map(value => value.name).join(", ")}
                      </span>
                    </S.AttributeValue>
                  </li>
                );
              }
            })}
        </S.AttributeList>
      )}
    </S.Wrapper>
  );
};
