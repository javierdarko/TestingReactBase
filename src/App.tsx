import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { HomeIndex } from "./components/MainComponent";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { darkTheme, lightTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";
import { store } from "./config/store";

const persistor = persistStore(store);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <HomeIndex toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
