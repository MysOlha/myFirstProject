import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import react from "react";

const App = () => {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
