import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import react from "react";
import { store } from "./redux/store";

import { Provider } from "react-redux";

const App = () => {
  const routing = useRoute(true);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};

export default App;
