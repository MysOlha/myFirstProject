import React, { useState, useEffect, useRef } from "react";

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
import * as Location from "expo-location";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePicture = async () => {
    const photo = await camera.takePictureAsync();
    // const location = Location.getCurrentPositionAsync();
    // console.log(location);
    // console.log(photo.uri);
    setPhoto(photo.uri);
  };

  const sendPhoto = async () => {
    navigation.navigate("Posts", { photo });
    // console.log(navigation);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => {
          setCamera(ref);
        }}
      >
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 340, height: 240, borderRadius: 8 }}
            />
          </View>
        )}
        <View style={styles.photoView}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" size={26} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </Camera>
      {!photo ? (
        <Text style={styles.upload}>Додайте фото</Text>
      ) : (
        <Text style={styles.upload}>Редагувати фото</Text>
      )}
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

      <TouchableOpacity onPress={sendPhoto}>
        <Text style={styles.sharePhoto}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    height: 240,
    marginTop: 32,
    marginRight: 16,
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderColor: "transparent",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
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
  takePhotoContainer: {
    position: "absolute",
    marginTop: 32,
    marginRight: 16,
  },
});

export default CreatePostsScreen;
