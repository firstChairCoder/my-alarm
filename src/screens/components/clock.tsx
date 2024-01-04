import { StyleSheet, View } from "react-native";

import { BigClock, Counter, SmallClock } from "../../components";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  smallClockWrapper: {
    bottom: 50,
    position: "absolute"
  }
});

const Clock = () => {
  return (
    <View style={styles.container}>
      <Counter />
      <View style={styles.container}>
        <BigClock />
        <View style={styles.smallClockWrapper}>
          <SmallClock />
        </View>
      </View>
    </View>
  );
};

export default Clock;
