import { StyleSheet, Text, View } from "react-native";

import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  formatContainer: {
    alignItems: "baseline",
    flexDirection: "row"
  },
  number: {
    color: colors.white,
    fontFamily: "ShareTechMono",
    fontSize: 28,
    width: 36
  },
  label: {
    color: colors.gray,
    fontFamily: "ShareTechMono",
    fontSize: 20
  },
  dot: {
    color: colors.inactive,
    fontFamily: "ShareTechMono",
    fontSize: 24,
    marginHorizontal: 16
  }
});

const CounterFormat = () => {
  return (
    <View style={styles.formatContainer}>
      <Text style={styles.number}>h</Text>
      <Text style={styles.label}>h</Text>
      <Text style={styles.dot}>:</Text>

      <Text style={styles.number}>m</Text>
      <Text style={styles.label}>m</Text>
      <Text style={styles.dot}>:</Text>

      <Text style={styles.number}>s</Text>
      <Text style={styles.label}>s</Text>

      <Text style={styles.dot}>:</Text>
      <Text style={styles.number}>ms</Text>
      <Text style={styles.label}>ms</Text>
    </View>
  );
};

const Counter = () => {
  return (
    <View style={{ position: "absolute" }}>
      <CounterFormat />
    </View>
  );
};

export default Counter;
