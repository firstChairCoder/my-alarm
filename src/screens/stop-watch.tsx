/* eslint-disable @typescript-eslint/no-shadow */
import { StyleSheet, View } from "react-native";
import { useRef, useState } from "react";

import type { IControls } from "../context";
import { AppContextProvider } from "../context";
import { ActionBar, CustomClock } from "./components";
import { CustomButton } from "../components";

const styles = StyleSheet.create({
  resultsBtn: {
    position: "absolute",
    zIndex: 2
    // top: -30
  },
  container: { flex: 1 },
  clock: { flex: 2 },
  bottom: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});

export const Stopwatch = () => {
  const [play, setPlay] = useState(false);
  const [reset, setReset] = useState(0);
  const [saved, setSaved] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const elapsed = useRef(0);

  const controls: IControls = {
    play: () => setPlay((play) => !play),
    reset: () => {
      setPlay(false);
      () => setReset((reset) => reset + 1);
      setSaved([]);
      elapsed.current = 0;
    },
    isModalOpen: (open) => {
      setIsModalOpen(open);
    },
    new: () => {
      if (elapsed.current !== 0) {
        setSaved([...saved, elapsed.current]);
      }
    }
  };

  return (
    <AppContextProvider value={{ play, controls, reset, elapsed, saved }}>
      <View style={styles.container}>
        <CustomClock style={styles.clock} />
        <View style={styles.bottom}>
          <View style={styles.resultsBtn}>
            <CustomButton type={"TEXT"} size={80} />
          </View>
          <ActionBar />
        </View>
      </View>
    </AppContextProvider>
  );
};
