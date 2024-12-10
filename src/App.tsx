import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { darkTheme, lightTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";
import AppRoutes from "./components/AppRoutes";
import { GlobalHeader } from "./components/MainComponent/HeaderContainer";
import { store } from "./config/store";

const persistor = persistStore(store);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <GlobalHeader setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
