import React, { useState } from "react";
<script src="http://localhost:8097"></script>;
import { authSignIn } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const onLogin = () => {
    Keyboard.dismiss();
    dispatch(authSignIn(state));
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
              <Text style={styles.title}>Реєстрація</Text>

              <TextInput
                value={state.name}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, name: value }))
                }
                placeholder="Логін"
                style={styles.input}
              />
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
                <Text style={styles.btnText}>Зареєструватися</Text>
              </TouchableOpacity>
              <View style={styles.logInText}>
                <Text>
                  Вже є аккаунт?
                  <Text
                    style={{ fontWeight: "bold" }}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Увійти
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
    marginTop: 25,
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
    marginTop: 10,
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
    marginTop: -120,
  },
});
