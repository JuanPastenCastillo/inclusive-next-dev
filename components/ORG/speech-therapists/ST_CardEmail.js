import { EmailORGSvg } from "../../../assets/Icons/index.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_CardEmailWrapper } from "./styles/ST_CardEmailWrapper.js"

export const ST_CardEmail = ({ email, isMobile = false, isThirdPageMobile = false }) => {
  return (
    <ST_CardEmailWrapper
      isThirdPageMobile={isThirdPageMobile}
      isMobile={isMobile}>
      <div>
        <EmailORGSvg />

        {isMobile === false ? (
          <>
            <P bold>Email:</P>
          </>
        ) : isMobile && isThirdPageMobile ? null : (
          <>
            <Caption bold>Email:</Caption>
          </>
        )}
      </div>

      {isMobile === false ? (
        <>
          <P>{email}</P>
        </>
      ) : isMobile && isThirdPageMobile ? (
        <>
          <P>{email}</P>
        </>
      ) : (
        <>
          <Caption>{email}</Caption>
        </>
      )}
    </ST_CardEmailWrapper>
  )
}
