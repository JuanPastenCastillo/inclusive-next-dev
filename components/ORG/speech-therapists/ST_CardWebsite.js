import { WebsiteSvg } from "../../../assets/Icons/index.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_CardWebsiteWrapper } from "./styles/ST_CardWebsiteWrapper.js"

export const ST_CardWebsite = ({ firstName, lastName, isMobile = false, isThirdPageMobile = false }) => {
  const website = `https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}SLP.com`

  return (
    <ST_CardWebsiteWrapper
      isThirdPageMobile={isThirdPageMobile}
      isMobile={isMobile}>
      <div>
        <WebsiteSvg />

        {isMobile === false ? (
          <>
            <P bold>Website:</P>
          </>
        ) : isMobile && isThirdPageMobile ? null : (
          <>
            <Caption bold>Website:</Caption>
          </>
        )}
      </div>

      {isMobile === false ? (
        <>
          <P>{website}</P>
        </>
      ) : isMobile && isThirdPageMobile ? (
        <>
          <P>{website}</P>
        </>
      ) : (
        <>
          <Caption>{website}</Caption>
        </>
      )}
    </ST_CardWebsiteWrapper>
  )
}
