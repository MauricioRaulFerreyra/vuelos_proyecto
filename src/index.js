import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../src/Redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
// axios.defaults.baseURL = process.env.REACT_APP_API;

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

const domain = "dev-lagswg4t7w0xx7lh.us.auth0.com";
const clientId = "5p2U747U876xI9J0x1bY3iL2qd8qrwII";


i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Auth0Provider
              domain={domain}
              clientId={clientId}
              redirect_uri={window.location.origin}
            >
              <App />
            </Auth0Provider>
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
