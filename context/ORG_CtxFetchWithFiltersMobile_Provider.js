import { createContext, useContext, useState } from "react"
import { FetchFiltered } from "../utils/ORG_dummydataFiltered_speechtherapists"
import { useORG_Ctx_FetchNoFiltersMobile } from "./ORG_CtxFetchNoFiltersMobile_Provider"

const ORG_Ctx_fetchWithFiltersMobile = createContext(null)

export const ORG_CtxFetchWithFiltersMobile_Provider = ({ children }) => {
  const [howMuchShow, setHowMuchShow] = useState(4)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersMobile()

  const {
    dataF,
    setDataF,
    filtersF,
    setFiltersF,
    actualSortF,
    setActualSortF
  } = FetchFiltered(
    pagination, howMuchShow, "MobileHere → 4"
  )

  return (
    <ORG_Ctx_fetchWithFiltersMobile.Provider
      value={{
        pagination,
        setPagination,
        howMuchShow,
        setHowMuchShow,
        dataF,
        setDataF,
        filtersF,
        setFiltersF,
        actualSortF,
        setActualSortF
      }}>
      {children}
    </ORG_Ctx_fetchWithFiltersMobile.Provider>
  )
}

export const useORG_Ctx_FetchWithFiltersMobile = () => {
  return useContext(ORG_Ctx_fetchWithFiltersMobile)
}
