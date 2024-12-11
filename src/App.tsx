import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./config/store";
import { darkTheme, lightTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";
import AppRoutes from "./components/AppRoutes";
import { GlobalHeader } from "./components/MainComponent/HeaderContainer";
import { HashRouter } from "react-router-dom";

const persistor = persistStore(store);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("isDarkMode") || "false")
  );
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <GlobalHeader
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
            />
            <AppRoutes />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
