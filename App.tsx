import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const App = () => {
  //   const [simpleImageURI, setSimpleImageURI] = useState("");
  //   const onSimplePicturePick = async () => {
  //     const result = await launchImageLibrary({
  //       mediaType: "photo",
  //     });

  //     console.log("the result --> ", JSON.stringify(result, null, 4));
  //     setSimpleImageURI(result.assets[0].uri);
  //   };

  const [imagesAssets, setImagesAssets] = useState([]);

  const onMultiplePicturePick = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 0,
    });

    console.log("the result --> ", JSON.stringify(result, null, 4));
    setImagesAssets(result.assets);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.helloWorld}>Hello world!</Text>

      <TouchableOpacity
        style={styles.pickButton}
        onPress={onMultiplePicturePick}
      >
        <Text>Pick a picture!</Text>
      </TouchableOpacity>

      {/* {simpleImageURI?.length > 0 ? (
        <Image source={{ uri: simpleImageURI }} style={styles.image} />
      ) : null} */}

      {imagesAssets.map((asset) => (
        <Image source={{ uri: asset.uri }} style={styles.image} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  helloWorld: { fontSize: 30 },
  pickButton: {
    marginTop: 16,
    backgroundColor: "lightblue",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    marginTop: 16,
    borderRadius: 12,
    width: 300,
    aspectRatio: 16 / 9,
  },
});

export default App;
