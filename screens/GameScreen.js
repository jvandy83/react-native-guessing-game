import { Text, View, StyleSheet } from "react-native";

export const GameScreen = ({ navigation, onIncrement, onDecrement }) => {
  const handleIncrement = () => {
    onIncrement();
  };
  const handleDecrement = () => {
    onDecrement();
  };
  return (
    <View>
      <Text>Opponents Guess</Text>
      <Text>Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <Text onPress={handleIncrement}>+</Text>
          <Text onPress={handleDecrement}>-</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
