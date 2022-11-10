import { useEffect, useState } from "react"
import {
  ORG_Filterdata_Accepts,
  ORG_Filterdata_AgesServed,
  ORG_Filterdata_Diagnoses,
  ORG_Filterdata_Distance,
  ORG_Filterdata_Languages,
  ORG_Filterdata_MeetingFormat,
  ORG_Filterdata_ProviderType,
  ORG_Filterdata_Rating,
  ORG_Filterdata_ServiceSetting,
  ORG_Filterdata_SessionType,
  ORG_Filterdata_Transportation,
  ORG_Filterdata_YoP
} from "./ORG_Filterdata"

export const useFetch = (url, pagination) => {
  // This code is for debuggin purposes. When is uncommented you have to comment the code below of them to display always the loading state
  
  // const data = {}
  // return {data}
  
  
  const [data, setData] = useState()
  useEffect(() => {
    let getData = { actualPage: "", allData: "", filters: [] }

    fetch(`${url}${pagination}`)
      .then((x) => x.json())
      .then((x) => {
        getData.actualPage = x.info.page
        getData.allData = x.results
        let howMuchGet = getData.allData.length
        for (let index = 0; index < howMuchGet; index++) {
          const distance = ORG_Filterdata_Distance()
          const rating = ORG_Filterdata_Rating()
          const diagnoses = ORG_Filterdata_Diagnoses()
          const agesServed = ORG_Filterdata_AgesServed()
          const languages = ORG_Filterdata_Languages()
          const yearsOfPractice = ORG_Filterdata_YoP()
          const serviceSetting = ORG_Filterdata_ServiceSetting()
          const accepts = ORG_Filterdata_Accepts()
          const meetingFormat = ORG_Filterdata_MeetingFormat()
          const sessionType = ORG_Filterdata_SessionType()
          const transportation = ORG_Filterdata_Transportation()
          const providerType = ORG_Filterdata_ProviderType()

          getData.filters = [
            ...getData.filters,
            {
              distance: distance,
              rating: rating,
              diagnoses: diagnoses,
              agesServed: agesServed,
              languages:languages,
              yearsOfPractice:yearsOfPractice,
              serviceSetting:serviceSetting,
              accepts:accepts,
              meetingFormat:meetingFormat,
              sessionType:sessionType,
              transportation:transportation,
              providerType:providerType,
            }
          ]
        }
        setData(getData)
      })
  }, [url, pagination])
  return { data }
}
