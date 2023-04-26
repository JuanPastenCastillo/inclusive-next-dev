import { useReducer, useState } from "react"
import { H1, H2 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { UnderConstruction } from "../../../../under-construction/UnderConstruction.js"
import { LandingThreeSpeechTherapists } from "./LandingThreeSpeechTherapists.js"
import { ThreeCardsLanding } from "./ThreeCardsLanding.js"
import { CardsLandingWrapper } from "./styles/CardsLandingWrapper.js"
import { MustShowResultsWrapper } from './styles/MustShowResultsWrapper.js'


const reducer = (state, action) => {
  switch (action.type) {
    case "get_data": {
      return {
        ...state,
        SpeechTherapists: [...action.payload]
      }
    }
  }
  throw Error("Unknown action: " + action.type)
}

const initialState = {
  SpeechTherapists: []
}

export const CardsLanding = () => {
  const [mustShowResults, setMustShowResults] = useState(false)

  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log('❌state:', state)

  return (
    <CardsLandingWrapper>
      <H1 hover>Resources</H1>

      <ThreeCardsLanding
        setMustShowResults={setMustShowResults}
        dispatch={dispatch}
        mustShowResults={mustShowResults}
      />

      {mustShowResults === false ? (
        <H2 hover>Select a resource above to view top rated services near you!</H2>
      ) : mustShowResults && state.SpeechTherapists.length === 0 ? (
        <>
          <UnderConstruction />

        </>
      ) : (
        mustShowResults &&
        state.SpeechTherapists.length !== 0 && (
          <MustShowResultsWrapper>
            <H2 hover>Top Therapeutic Services</H2>

            <LandingThreeSpeechTherapists dataToUse={state.SpeechTherapists[0]} />
          </MustShowResultsWrapper>
        )
      )}
    </CardsLandingWrapper>
  )
}
