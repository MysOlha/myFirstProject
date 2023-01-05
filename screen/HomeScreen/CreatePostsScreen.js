import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

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
});

export default CreatePostsScreen;
