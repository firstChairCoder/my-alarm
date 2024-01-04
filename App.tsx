import {
  ShareTechMono_400Regular,
  useFonts
} from "@expo-google-fonts/share-tech-mono";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";

import { colors } from "./src/constants/colors";
import { TabSwitcher } from "./src/components";
import { Stopwatch } from "./src/screens";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  innerWrapper: {
    flex: 1,
    width: "100%"
  },
  body: {
    flex: 1
  }
});

export default function App() {
  const [tab, setTab] = useState(0);
  const [fontsLoaded] = useFonts({
    ShareTechMono: ShareTechMono_400Regular
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.innerWrapper}>
          <View style={styles.body}>{tab === 0 ? <Stopwatch /> : null}</View>

          <StatusBar style="auto" />
          <TabSwitcher />
        </View>
      </View>
    </SafeAreaView>
  );
}
