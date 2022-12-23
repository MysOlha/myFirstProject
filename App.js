import * as Font from "expo-font";
import RegistrationScreen from "./screen/RegistrationScreen";
import LoginScreen from "./screen/LoginScreen";
import { ImageBackground } from "react-native";

const App = () => {
  return (
    <>
      <ImageBackground
        source={require("../PhotoBG.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        {/* <LoginScreen /> */}
        <RegistrationScreen />
      </ImageBackground>
    </>
  );
};

export default App;
