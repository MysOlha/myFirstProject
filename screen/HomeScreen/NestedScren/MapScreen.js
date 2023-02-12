import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: 22.3101006,
          latitude: 48.5958402,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={{ longitude: 22.3101006, latitude: 48.5958402 }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
