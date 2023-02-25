import * as Font from "expo-font";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const auth = getAuth();
const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => setUser(user));

  const routing = useRoute(user);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};

export default App;
