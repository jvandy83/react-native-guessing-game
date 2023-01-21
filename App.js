import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";

import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const incrementNumber = () => {
    setCurrentGuess((prev) => (prev += 1));
  };
  const decrementNumber = () => {
    setCurrentGuess((prev) => (prev -= 1));
  };
  return (
    <LinearGradient colors={["#984f00", "#8d98d3"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpeg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartGameScreen">
            <Stack.Screen name="StartGameScreen" options={{ title: "Welcome" }}>
              {(props) => (
                <StartGameScreen
                  {...props}
                  currentGuess={currentGuess}
                  setCurrentGuess={setCurrentGuess}
                />
              )}
            </Stack.Screen>

            <Stack.Screen name="GameScreen">
              {(props) => (
                <GameScreen
                  {...props}
                  onIncrement={incrementNumber}
                  onDecrement={decrementNumber}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
