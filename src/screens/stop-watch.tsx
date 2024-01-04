import { StyleSheet, View } from "react-native";

import { AppContextProvider } from "../context";
import { ActionBar, CustomClock } from "./components";
import { CustomButton } from "../components";

const styles = StyleSheet.create({
  resultsBtn: {
    position: "absolute",
    zIndex: 2
    // top: -30
  }
});

export const Stopwatch = () => {
  return (
    <AppContextProvider>
      <View>
        <CustomClock />
        <View>
          <View style={styles.resultsBtn}>
            <CustomButton type={"TEXT"} size={80} />
          </View>
          <ActionBar />
        </View>
      </View>
    </AppContextProvider>
  );
};
