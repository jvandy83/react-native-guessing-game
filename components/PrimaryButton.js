import { Text, View, StyleSheet, Pressable } from "react-native";

export const PrimaryButton = ({ text, width, onPressHandler }) => {
  return (
    <View style={{ ...styles.buttonOuterContainer }}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressHandler}
        android_ripple={{ color: "#58a3df" }}
      >
        <Text style={styles.button}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#1c87b9",
    elevation: 2,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
