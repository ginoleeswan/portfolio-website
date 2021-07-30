import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/contact">How It Works</FooterLink>
                <FooterLink to="/contact">Testimonials</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/contact">How It Works</FooterLink>
                <FooterLink to="/contact">Testimonials</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/contact">How It Works</FooterLink>
                <FooterLink to="/contact">Testimonials</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/contact">How It Works</FooterLink>
                <FooterLink to="/contact">Testimonials</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer> */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Gino Swanepoel</SocialLogo>
              <WebsiteRights>
                © {new Date().getFullYear()} Gino Swanepoel
              </WebsiteRights>
              <WebsiteRights>All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/ginoleemusic"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/mrginolee/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.linkedin.com/in/ginoswanepoel/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="//wwwtwitter.com/mrginolee/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
