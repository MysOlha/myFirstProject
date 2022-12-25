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

export default function RegistrationScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const onLogin = () => {
    console.log("Log in"`${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
              value={name}
              onChangeText={nameHandler}
              placeholder="Логін"
              style={styles.input}
            />
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Електронна пошта"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={styles.btnText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.logInText}>Вже є аккаунт? Увійти</Text>
          </ImageBackground>
        </KeyboardAvoidingView>
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
    borderColor: "black",
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
