import "./scss/index.scss";
import * as React from "react";
import LogoSmall from "../../images/logo-small.svg";
import { SocialMediaIcon } from "..";
// import { CreditCardIcon } from "../../@next/components/atoms/CreditCardIcon";

import { SOCIAL_MEDIA } from "../../core/config";

import Nav from "./Nav";

const Footer: React.FC = () => (
  <footer className="footer" id="footer">
    <div className="container">
      <div className="footer__logo">
        <img width="150px" src={LogoSmall} alt="logo" />
        <div className="footer__favicons">
          {SOCIAL_MEDIA.map(medium => (
            <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
          ))}
        </div>
      </div>
      <div className="footer__section">
        <div className="footer__section-content">
          <h4 className="footer__section-header">Contact</h4>
          <p>Scuba Dive Dubai</p>
          <p>PO Box 4156</p>
          <p>Dubai</p>
          <p>UAE</p>
          <p>+971 50 230 2563</p>
          <p>+971 22 3265</p>
        </div>
      </div>
      {/* <CreditCardIcon creditCardProvider="discover" />
      <CreditCardIcon creditCardProvider="visa" />
      <CreditCardIcon creditCardProvider="mastercard" />
      <CreditCardIcon creditCardProvider="discover" />
      <CreditCardIcon creditCardProvider="discover" /> */}
      <Nav />
    </div>
  </footer>
);

export default Footer;
