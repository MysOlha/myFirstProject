import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogIn } from "../redux/auth/authOperations";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";

const initialState = {
  password: "",
  email: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const onLogin = () => {
    Keyboard.dismiss();
    dispatch(authLogIn(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../PhotoBG.png")}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <ImageBackground
              source={require("../BG.png")}
              resizeMode="stretch"
              style={styles.bottomSide}
            >
              <Image
                source={require("../Add_photo.png")}
                style={styles.imgAddPhoto}
              />
              <Text style={styles.title}>Увійти</Text>

              <TextInput
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Електронна пошта"
                style={styles.input}
              />

              <TextInput
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
              />

              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              <View style={styles.logInText}>
                <Text>
                  Немає аккаунта?
                  <Text
                    style={{ fontWeight: "bold" }}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    {" "}
                    Зареєструватися
                  </Text>
                </Text>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#212121",
    fontSize: 30,
    marginBottom: 20,
    marginTop: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  imgAddPhoto: {
    marginTop: -60,
    marginLeft: "33%",
  },

  button: {
    height: 51,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 100,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
  },
  logInText: {
    alignItems: "center",
    justifyContent: "center",
    color: "1B4371",
    marginTop: 10,
  },
  bottomSide: {
    flex: 1,
    height: 500,
    marginTop: -100,
  },
});
