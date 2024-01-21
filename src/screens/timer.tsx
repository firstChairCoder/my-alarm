import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AppContextProvider } from "../context";
import { ActionBar, CustomClock } from "./components";
import { ModalWrapper } from "../components";
import Results from "./components/results";

const styles = StyleSheet.create({
  container: { flex: 1 },
  clock: { flex: 2 }
});

export const Timer = () => {
  const [play, setPlay] = useState(false);
  const [reset, setReset] = useState(0);
  const [timer, setTimer] = useState<number>(360000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const controls: IControls = {
  //   play: () => setPlay((play) => !play),
  //   reset: () => {
  // 	setPlay(false);
  // 	() => setReset((reset) => reset + 1);
  // 	setSaved([]);
  // 	elapsed.current = 0;
  //   },
  //   isModalOpen: (open) => {
  // 	setIsModalOpen(open);
  //   },
  //   new: () => {
  // 	if (elapsed.current !== 0) {
  // 	  setSaved([...saved, elapsed.current]);
  // 	}
  //   }
  // };

  return (
    <AppContextProvider value={{ play, reset }}>
      <View style={styles.container}>
        <CustomClock style={styles.clock} />

        <ActionBar />
      </View>

      <ModalWrapper modalOpen={isModalOpen} header="Results">
        <Results />
      </ModalWrapper>
    </AppContextProvider>
  );
};
