//Librairies
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";

//Composants
import Colors from "./constants/Colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway: require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={styles.presentation}>Retrouver le juste prix entre </Text>
        <Text style={styles.number}>0 </Text>
        <Text style={styles.presentation}>et </Text>
        <Text style={styles.number}>1000</Text>
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
            Commencer
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 150,
  },
  presentation: {
    fontFamily: "Raleway-Bold",
    fontSize: 16,
  },
  number: {
    fontFamily: "Raleway-Bold",
    fontSize: 16,
    color: Colors.secondary,
  },
  button: {
    width: "30%",
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
