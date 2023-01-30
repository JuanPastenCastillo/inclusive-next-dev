import { LeftArrowSvg, RightArrowSvg } from "../../../assets/Icons/index.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import {
  NextButton,
  PrevButton,
  SpeechtherapistFinalButtonsWrapper
} from "./styles/SpeechtherapistFinalButtonsWrapper.js"
import { NavigationButtonsNumbers } from "./NavigationButtonsNumbers.js"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles.js"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider.js"
import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"

export const SpeechtherapistFinalButtons = ({ widthWindow }) => {
  const [isMobile, setIsMobile] = useState(false)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()
  const { pagination: paginationMobile, setPagination: setPaginationMobile } = useORG_Ctx_FetchNoFiltersMobile()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  const toPreviousMobile = (parameters) => {
    setPaginationMobile((prevState) => {
      if (paginationMobile > 1) return paginationMobile - 1
      else return prevState
    })
  }

  useEffect(() => {
    if (widthWindow <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [widthWindow])

  return (
    <SpeechtherapistFinalButtonsWrapper isMobile={isMobile}>
      {isMobile === false ? (
        <>
          {pagination === 1 ? (
            <PrevButton
              onClick={() => toPrevious()}
              isMobile={isMobile}>
              <>
                <LeftArrowSvg />
                <P bold>Previous</P>
              </>
            </PrevButton>
          ) : (
            <LinkNoStyle href="#topOfSTL">
              <PrevButton
                onClick={() => toPrevious()}
                isMobile={isMobile}>
                <>
                  <LeftArrowSvg />
                  <P bold>Previous</P>
                </>
              </PrevButton>
            </LinkNoStyle>
          )}
        </>
      ) : (
        <>
          {" "}
          {pagination === 1 ? (
            <PrevButton
              onClick={() => toPreviousMobile()}
              isMobile={isMobile}>
              <>
                <LeftArrowSvg />
              </>
            </PrevButton>
          ) : (
            <LinkNoStyle href="#topOfSTL">
              <PrevButton
                onClick={() => toPreviousMobile()}
                isMobile={isMobile}>
                <>
                  <LeftArrowSvg />
                </>
              </PrevButton>
            </LinkNoStyle>
          )}
        </>
      )}


      <NavigationButtonsNumbers isMobile={isMobile} />

      {isMobile === false ? (
        <>
          <LinkNoStyle href="#topOfSTL">
            <NextButton
              onClick={() => setPagination(pagination + 1)}
              isMobile={isMobile}>
              <>
                <P bold>Next</P>
                <RightArrowSvg />
              </>
            </NextButton>
          </LinkNoStyle>
        </>
      ) : (
        <>
          <LinkNoStyle href="#topOfSTL">
            <NextButton
              onClick={() => setPaginationMobile(paginationMobile + 1)}
              isMobile={isMobile}>
              <>
                <RightArrowSvg />
              </>
            </NextButton>
          </LinkNoStyle>
        </>
      )}

      
    </SpeechtherapistFinalButtonsWrapper>
  )
}
