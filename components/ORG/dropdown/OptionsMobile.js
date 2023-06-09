import { useCheckMobile } from "../../../utils/useCheckMobile"
import { OptionsMobileWrapper } from "./styles/OptionsMobileWrapper"

export const OptionsMobile = ({ isFocus = true, setIsHover, children, setIsFocusKeyword, theRef }) => {
  const { isTouchScreen } = useCheckMobile()

  return (
    <>
      {isFocus && (
        <OptionsMobileWrapper
          onMouseEnter={
            !isTouchScreen
              ? () => {
                  setIsHover(true)
                }
              : undefined
          }
          onMouseLeave={
            !isTouchScreen
              ? () => {
                  setIsHover(false)
                }
              : undefined
          }
          onTouchStart={
            isTouchScreen
              ? (e) => {
                  e.stopPropagation();
                  setIsFocusKeyword(true)
                }
              : undefined
          }
          ref={theRef}
          isMobile={true}>
          {children}
        </OptionsMobileWrapper>
      )}
    </>
  )
}
