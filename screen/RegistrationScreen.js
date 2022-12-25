import React, { useState } from "react";
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

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);

  const onLogin = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../BG.png")}
          resizeMode="stretch"
          style={styles.bottomSide}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
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
            <Text style={styles.logInText}>Вже є аккаунт? Увійти</Text>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
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
    color: "1B4371",
    marginTop: 16,
    textAlign: "center",
    marginBottom: 100,
  },
});
