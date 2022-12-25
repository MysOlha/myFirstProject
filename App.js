import * as Font from "expo-font";
import RegistrationScreen from "./screen/RegistrationScreen";
import LoginScreen from "./screen/LoginScreen";
import { ImageBackground, StyleSheet } from "react-native";

const App = () => {
  return (
    <>
      <ImageBackground
        source={require("./PhotoBG.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
