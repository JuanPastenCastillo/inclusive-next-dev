import { useState } from "react";
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts";
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles";
import { STDetailMobile_StickyNavbarWrapper } from "./styles/STDetailMobile_StickyNavbarWrapper";

export const STDetailMobile_StickyNavbar = ({ sticky }) => {
  const [targetIsInView, setTargetIsInView] = useState(false);
  
  const handleNavigation = (e, toWhere) => {
    e.preventDefault();
    const target = document.getElementById(toWhere);
    
    target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  
  
  return (
    <STDetailMobile_StickyNavbarWrapper sticky={sticky}>
      <ul>
        <li>
          <Caption>
            <LinkNoStyle
              href="#About"
              // onClick={(e) => handleNavigation(e, "About")}
              
              // as={pathname}
              >
              About
            </LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle
              href="#Details"
              // as={pathname}
              >
              Details
            </LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle
              href="#Contact"
              // as={pathname}
              >
              Contact
            </LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle
              href="#Reviews"
              // as={pathname}
              >
              Reviews
            </LinkNoStyle>
          </Caption>
        </li>
      </ul>
    </STDetailMobile_StickyNavbarWrapper>
  )
}

/* 

!FH4
Make this keep it working:
✅°) Make the border bottom be weider than the width of the element
👀°) Keep with next sections
°) Make the navbar work as "activeSection", making it with some style when the user is in the section
*/
