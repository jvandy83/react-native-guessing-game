import { useState } from "react";

import { TextInput, View, StyleSheet, Alert } from "react-native";

import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = ({
  navigation,
  setCurrentGuess,
  currentGuess,
}) => {
  const handleChange = (enteredNumber) => {
    setCurrentGuess(enteredNumber);
  };

  const handleResetNumber = () => {
    setCurrentGuess("");
  };
  const handleConfirmNumber = (enteredNumber) => {
    const chosenNumber = parseInt(enteredNumber);
    console.log(chosenNumber);
    66;
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleResetNumber }]
      );
      return;
    }
    navigation.navigate("GameScreen");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleChange}
        maxLength={2}
        style={styles.numberInput}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={currentGuess || ""}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPressHandler={handleResetNumber}
            width={80}
            text="Reset"
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPressHandler={() => handleConfirmNumber(currentGuess)}
            width={80}
            text="Confirm"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 5,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#8d98d3",
    // elevation is Android only
    elevation: 8,
    // shadow is IOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#2e4357",
    borderBottomWidth: 2,
    color: "#2e4357",
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flex: 1,
  },
});
