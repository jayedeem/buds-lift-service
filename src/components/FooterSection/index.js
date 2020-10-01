import React from "react"
import {
  FooterWrapper,
  FaceBookIcon,
  InstagramIcon,
  YelpIcon,
  IconLinks,
} from "./footerElements"

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <span>Find Us On:</span>
        <IconLinks to="https://facebook.com">
          <FaceBookIcon />
        </IconLinks>
        <IconLinks to="https://instagram.com">
          <InstagramIcon />
        </IconLinks>
        <IconLinks to="https://yelp.com">
          <YelpIcon />
        </IconLinks>
      </FooterWrapper>
    </>
  )
}
