import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

import { BigClock, Counter, SmallClock } from "../../components";
import { STOPWATCH_DURATION, TIMER_DURATION } from "../../hooks/use-counter";

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

interface ClockProps {
  style?: StyleProp<ViewStyle>;
  timer?: number;
}

const Clock = ({ style, timer }: ClockProps) => {
  const type = !timer ? "STOPWATCH" : "TIMER";

  return (
    <View style={[styles.container, style]}>
      <Counter timer={timer} />
      <View style={styles.container}>
        <BigClock
          type={type}
          duration={timer ? timer || TIMER_DURATION : STOPWATCH_DURATION}
        />
        <View style={styles.smallClockWrapper}>
          <SmallClock />
        </View>
      </View>
    </View>
  );
};

export default Clock;
