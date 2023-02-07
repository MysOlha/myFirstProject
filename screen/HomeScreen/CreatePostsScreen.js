import React from "react";
import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePicture = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo.uri);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePictureContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePicture} style={styles.cameraBtn}>
          <FontAwesome name="camera" size={26} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <Text style={styles.upload}>Додайте фото</Text>
      <TouchableOpacity>
        <TextInput
          placeholder="Назва..."
          fontSize={16}
          style={styles.signToPhoto}
        ></TextInput>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.signToPhoto}>
          <Text>
            <EvilIcons name="location" size={24} />
          </Text>
          <TextInput
            placeholder="Додати місцезнаходження"
            fontSize={16}
          ></TextInput>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.sharePhoto}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 240,
    marginTop: 32,
    marginRight: 16,
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBtn: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "transparent",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  takePictureContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  upload: {
    color: "#BDBDBD",
    marginBottom: 32,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 8,
  },
  signToPhoto: {
    marginTop: 16,
    color: "#BDBDBD",
    fontSize: 16,
    marginLeft: 16,
    flexDirection: "row",
  },
  sharePhoto: {
    textAlign: "center",
    color: "#BDBDBD",
    fontSize: 16,
    marginTop: 48,
  },
});

export default CreatePostsScreen;
