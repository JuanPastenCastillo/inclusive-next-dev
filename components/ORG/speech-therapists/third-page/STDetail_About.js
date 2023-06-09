import { useEffect, useState } from "react"
import { ORG_ST_About } from "../../../../utils/ORG_ST_About.js"
import { useWidthWindow } from "../../../../utils/useWidthWindow.js"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../ui/heading_body_text/HeaderFonts"
import { STDetail_AboutWrapper } from "./styles/STDetail_AboutWrapper"

export const STDetail_About = ({ name, lastName, aboutRef }) => {
  const [aboutTextState, setAboutTextState] = useState()
  useEffect(() => {
    const aboutText = ORG_ST_About(name, lastName)
    setAboutTextState(aboutText)
  }, [])

  const { isMobile } = useWidthWindow()

  return (
    <STDetail_AboutWrapper
      isMobile={isMobile}
      id="About"
      ref={aboutRef}>
      {isMobile === false ? (
        <>
          <H4 cta>About</H4>
        </>
      ) : (
        <>
          <Caption
            primary_cta
            bolder>
            About
          </Caption>
        </>
      )}

      <P>{aboutTextState}.</P>
    </STDetail_AboutWrapper>
  )
}
