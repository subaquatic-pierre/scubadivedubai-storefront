import { media, styled } from "@styles";

export const Wrapper = styled.div`
  h2 {
    font-size: 1.8em;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  h2::after {
    content: "";
    border-bottom: 5px solid ${props => props.theme.colors.listBullet};
    display: block;
    margin-top: 0.8rem;
    width: 20%;
  }

  ul {
    text-indent: -25px; /* key property */
    margin-left: 25px; /* key property */
  }

  li {
    margin-bottom: 20px;
    font-size: ${props => props.theme.typography.h4FontSize};
    line-height: 1.5rem;
  }

  li::before {
    content: "•";
    margin-right: 20px;
    color: ${props => props.theme.colors.listBullet};
  }
`;

export const AttributeValue = styled.span`
  margin-left: auto;
`;

export const AttributeList = styled.ul`
  max-width: 80%;
  ${media.mediumScreen`
    max-width: 95%;
  `};
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 20px;
    font-size: ${props => props.theme.typography.h4FontSize};
    display: flex;
    justify-content: space-between;
  }

  li::before {
    content: "•";
    margin-right: 20px;
    color: ${props => props.theme.colors.listBullet};
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-wrap: none;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.tabsBorder};
  margin-bottom: 70px;
  overflow: hidden;
`;

export const TabTitle = styled.div<{ active?: boolean }>`
  cursor: pointer;
  min-width: 230px;
  font-size: ${props => props.theme.typography.h3FontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  letter-spacing: 0.02em;
  color: ${props => props.active && props.theme.colors.tabTitle};
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.active ? props.theme.colors.tabTitle : "transparent"};
  padding-bottom: 25px;
  margin-right: 60px;

  ${media.smallScreen`
    font-size: ${(props: any) => props.theme.typography.h4FontSize};
    min-width: 150px;
    margin-right: 20px;
  `};
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;
