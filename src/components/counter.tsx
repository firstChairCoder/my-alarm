import { Alert, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect } from "react";

import { colors } from "../constants/colors";
import formatTime from "../utils/format-time";
import useCounter from "../hooks/use-counter";
import AppContext from "../context";

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

interface CounterFormatProps {
  type: "TIMER" | "STOPWATCH";
  time: number;
}

const CounterFormat = ({ type, time }: CounterFormatProps) => {
  const { hours, minutes, seconds, milliseconds } = formatTime({ time });
  return (
    <View style={styles.formatContainer}>
      {type === "TIMER" && (
        <>
          <Text style={styles.number}>{hours}</Text>
          <Text style={styles.label}>h</Text>
          <Text style={styles.dot}>:</Text>
        </>
      )}

      <Text style={styles.number}>{minutes}</Text>
      <Text style={styles.label}>m</Text>
      <Text style={styles.dot}>:</Text>

      <Text style={styles.number}>{seconds}</Text>
      <Text style={styles.label}>s</Text>

      {type === "STOPWATCH" && (
        <>
          <Text style={styles.dot}>:</Text>
          <Text style={styles.number}>{milliseconds}</Text>
          <Text style={styles.label}>ms</Text>
        </>
      )}
    </View>
  );
};

const Counter = ({ timer }: { timer?: number }) => {
  const {
    controls: { play, reset },
    value
  } = useCounter({ timer });
  const context = useContext(AppContext);

  useEffect(() => {
    context.play ? play(true) : play(false);
  }, [play]);

  useEffect(() => {
    context.reset > 0 && reset();
  }, [reset]);

  if (context.elapsed) {
    context.elapsed.current = value;
  }
  if (timer && context.play && value === 0) {
    setTimeout(() => {
      reset();
      Alert.alert("It is finished!!");
    });
  }

  return (
    <View style={{ position: "absolute" }}>
      <CounterFormat type={!timer ? "STOPWATCH" : "TIMER"} time={value} />
    </View>
  );
};

export default Counter;
