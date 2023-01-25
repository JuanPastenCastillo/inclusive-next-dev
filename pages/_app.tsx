import GlobalStyle from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_InputCtxProvider } from "../context/ORG_Input"
import { ORG_CtxIndividualSpeechtherapist_Provider } from "../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_CtxFetchNoFilters_Provider } from "../context/ORG_CtxFetchNoFilters_Provider.js"
import { ORG_CtxFetchWithFilters_Provider } from "../context/ORG_CtxFetchWithFilters_Provider.js"
import { ORG_CtxFiltersLeft_Provider } from "../context/ORG_CtxFiltersLeft_Provider.js"
import { ORG_CtxShowFiltersMobile_Provider } from "../context/ORG_Ctx_ShowFiltersMobile.js"
import { ORG_CtxFetchNoFiltersMobile_Provider } from "../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { ORG_CtxFetchWithFiltersMobile_Provider } from "../context/ORG_CtxFetchWithFiltersMobile_Provider.js"

function MyApp({ Component, pageProps }) {
  return (
    <LoginCtxProvider>
      <ORG_InputCtxProvider>
        <ORG_CtxIndividualSpeechtherapist_Provider>
          <ORG_CtxFetchNoFilters_Provider>
            <ORG_CtxFiltersLeft_Provider>
              <ORG_CtxFetchWithFilters_Provider>
                <ORG_CtxShowFiltersMobile_Provider>
                  <ORG_CtxFetchNoFiltersMobile_Provider>
                    <ORG_CtxFetchWithFiltersMobile_Provider>
                  
                  <PageLayout>
                    <GlobalStyle />
                    <link
                      rel="icon"
                      href="/favicon.ico"
                    />
                    <Component {...pageProps} />
                  </PageLayout>
                  
                  </ORG_CtxFetchWithFiltersMobile_Provider>
                  </ORG_CtxFetchNoFiltersMobile_Provider>
                </ORG_CtxShowFiltersMobile_Provider>
              </ORG_CtxFetchWithFilters_Provider>
            </ORG_CtxFiltersLeft_Provider>
          </ORG_CtxFetchNoFilters_Provider>
        </ORG_CtxIndividualSpeechtherapist_Provider>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
