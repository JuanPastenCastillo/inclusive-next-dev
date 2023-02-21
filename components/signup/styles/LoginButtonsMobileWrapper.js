import styled, { keyframes } from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"

const fadeIn = keyframes`
0%
  {
    transform:translateY(10%);
    opacity:0;
  }
100%
{
  transform:translateY(0px);
  opacity:1;
}
`
const fadeOut = keyframes`
0%
  {
    transform:translateY(0%);
    opacity:1;
  }
100%
{
  transform:translateY(10%);
  opacity:0;
}
`

export const LoginButtonsMobileWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${NEUTRALS.OFF_WHITE};
  margin-bottom: 176px;
  z-index:2;

  
  
  &.fadeIn{
    animation: 0.4s ${fadeIn} ease-out forwards;  
  }
  &.fadeOut{
    animation: 0.4s ${fadeOut} ease-out forwards;  
  }

  & > div {
    width: 56px;
    border: 3px solid ${NEUTRALS.LIGHT_GREY};
    margin-bottom: 40.5px;
    margin-top: 12.5px;
    border-radius: 3px;
  }

  & > button {
    width: 270px;
  }
  & > button:not(:last-child) {
    margin-bottom: 28px;
  }
`