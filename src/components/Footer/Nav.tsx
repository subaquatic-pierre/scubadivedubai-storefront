import * as React from "react";

import { NavLink } from "..";
import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";

class Nav extends React.PureComponent {
  render() {
    return (
      <TypedSecondaryMenuQuery>
        {({ data }) => {
          return data.shop.navigation.secondary.items.map(item => (
            <div className="footer__section" key={item.id}>
              <h4 className="footer__section-header">
                <NavLink item={item} />
              </h4>
              <div className="footer__section-content">
                {item.children.map(subItem => (
                  <p key={subItem.id}>
                    <NavLink item={subItem} />
                  </p>
                ))}
              </div>
            </div>
          ));
        }}
      </TypedSecondaryMenuQuery>
    );
  }
}

export default Nav;
