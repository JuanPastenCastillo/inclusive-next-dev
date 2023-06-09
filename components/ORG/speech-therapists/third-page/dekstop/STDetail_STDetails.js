import Image from "next/image"
import React from "react"
import { BookmarkSaveSTSvg } from "../../../../../assets/Icons"
import { ORG_FILTERS_KEYS } from "../../../../../utils/ORG_FiltersCategories"
import { H2 } from "../../../../ui/heading_body_text/HeaderFonts"
import { FriendlyDiagnoses } from "../../../friendlyDiagnoses/FriendlyDiagnoses"
import { StarsRatingReview } from "../../../stars-rating-review/StartsRatingReview"
import { Tooltip } from "../../../tooltip/Tooltip"
import { Verified } from "../../../verified/Verified"
import { ST_CardEmail } from "../../ST_CardEmail"
import { ST_CardLocation } from "../../ST_CardLocation"
import { ST_CardPhone } from "../../ST_CardPhone"
import { ST_TwoButtons } from "../../ST_TwoButtons"
import { ST_CardWrapper_Left, ST_CardWrapper_Left_LeftImage, ST_CardWrapper_Left_LeftInfo } from "../../styles/ST_CardWrapper"
import { STDetail_CardWrapper_SecondRow_Info } from "./STDetail_CardWrapper_SecondRow_Info"
import { STDetail_MapComponent } from "./STDetail_MapComponent"
import {
  STDetail_CardWrapper,
  STDetail_CardWrapper_Card_Detail,
  STDetail_CardWrapper_FirstRow,
  STDetail_CardWrapper_Right_Detail,
  STDetail_CardWrapper_SecondRow,
  STDetail_CardWrapper_SecondRow_LeftPart,
  STDetail_CardWrapper_SecondRow_RightPart
} from "./styles/STDetail_CardWrapper"

export const STDetail_STDetails = ({ STData }) => {
  // console.log('STData:', STData)
  return (
    <STDetail_CardWrapper>
      {STData.data.map((everySingleValue, i) => {
        let accepts = STData.filters[0].insurance.map((x) => x[0].toUpperCase() + x.slice(1))

        // let agesServed = STData.filters[0].agesServed
        let diagnosis = STData.filters[0][ORG_FILTERS_KEYS.diagnosis.updateState].map((x) => {
          if (x !== "Other") return `${x} Friendly`
          return x
        })

        // console.log('diagnosis:', diagnosis)
        let languages = STData.filters[0].language.map((x) => x[0].toUpperCase() + x.slice(1))
        let meetingFormat = new Intl.ListFormat("en").format(
          STData.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1))
        )
        let serviceSetting = STData.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1))
        return (
          <STDetail_CardWrapper_Card_Detail key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
            <ST_CardWrapper_Left STDetail={true}>
              <ST_CardWrapper_Left_LeftImage>
                <Image
                  src={everySingleValue.picture.large}
                  layout="responsive"
                  width="1"
                  height="1"
                  alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                />
                <Verified />
              </ST_CardWrapper_Left_LeftImage>

              <ST_CardWrapper_Left_LeftInfo>
                <ST_CardPhone phoneNumber={everySingleValue.phone} />
                <ST_CardEmail email={everySingleValue.email} />
                <ST_CardLocation
                  locationCity={everySingleValue.location.city}
                  locationStreetNumber={everySingleValue.location.street.number}
                  locationStreetName={everySingleValue.location.street.name}
                  locationState={everySingleValue.location.state}
                  howFar={STData.filters[0].distance}
                />
              </ST_CardWrapper_Left_LeftInfo>

              <ST_TwoButtons />

              <STDetail_MapComponent />
            </ST_CardWrapper_Left>

            <STDetail_CardWrapper_Right_Detail>
              <STDetail_CardWrapper_FirstRow>
                <BookmarkSaveSTSvg tabIndex={0} />
                <H2>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H2>
                <Tooltip />
                <StarsRatingReview
                  rating={STData.filters[0].rating}
                  reviews={STData.filters[0].reviews}
                />
                <FriendlyDiagnoses diagnosis={diagnosis} />
              </STDetail_CardWrapper_FirstRow>

              <STDetail_CardWrapper_SecondRow>
                <STDetail_CardWrapper_SecondRow_LeftPart>
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Ages served"
                    dataToShow={STData.filters[0][ORG_FILTERS_KEYS.agesServed.updateState]}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Languages"
                    dataToShow={languages}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Years of Practice"
                    dataToShow={STData.filters[0].yearsOfPractice}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Practice Setting"
                    dataToShow={serviceSetting}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Insurance"
                    dataToShow={accepts}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Meeting Format"
                    dataToShow={meetingFormat}
                  />
                </STDetail_CardWrapper_SecondRow_LeftPart>

                <STDetail_CardWrapper_SecondRow_RightPart>
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Qualifications"
                    dataToShow={serviceSetting}
                    rightRowQualification
                    rightRowQualification_Data={STData.filters[0].yearsOfPractice}
                    state={everySingleValue.location.state}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Additional Credentials"
                    rightRowCredentials
                    dataToShow={[
                      "Lee Silverman Voice Treatment Certification",
                      "SLP, Board Certified Behavior Analyst (BCBA)"
                    ]}
                  />
                </STDetail_CardWrapper_SecondRow_RightPart>
              </STDetail_CardWrapper_SecondRow>
            </STDetail_CardWrapper_Right_Detail>
          </STDetail_CardWrapper_Card_Detail>
        )
      })}
    </STDetail_CardWrapper>
  )
}
