import React from "react";
import { StatusBar } from "expo-status-bar";
import {Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import {ContentRoutes} from "../naviagtions/routes";
import {useNavigation} from "@react-navigation/native";
import {LoginGoogle} from "../component/axios/LoginRequest";

const LoginPage = ({ }) => {
  const navigation = useNavigation();
  const gohome = async () => {
    // await AsyncStorage.setItem('userData', JSON.stringify(tokenData));
    console.log("test")
    LoginGoogle().then((res)=>{console.log(res.data.message);});
    navigation.replace(ContentRoutes.Main.name);
  };
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
              source={require("../images/mainBar.png")}
              style={styles.headerImage}
          />
        </View>
        <StatusBar style="auto" />

        <View style={styles.imageContainer}>
          <Image
              source={require("../images/fish.png")}
              style={styles.image}
          />
        </View>
        <SafeAreaView style={styles.bottomBar}>
          <TouchableOpacity style={styles.googleButton} onPress={gohome}>
            <Image source={require("../images/google.png")} style={styles.googleIcon} />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7DC",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 200,
    width: "100%",
    top: -15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    height: "110%",
    width: "100%",
  },
  imageContainer: {
    top: -3,
    right: 0,
    height: 360,
    width: 360,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F4",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 15,
    bottom: -15,
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomBar: {
    backgroundColor: "#F2D98D",
    width: "100%",
    height: 150,
    top: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    backgroundColor: "#000000",
  },
});

export default LoginPage;
