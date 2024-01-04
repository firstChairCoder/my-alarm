import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // height: 20,
    marginBottom: 20
  },
  text: {
    color: colors.white,
    fontFamily: "ShareTechMono",
    fontSize: 24,
    textTransform: "uppercase"
  },
  btn: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});

const SwitcherButton = ({ label }: { label: string }) => {
  return (
    <Pressable style={styles.btn} onPress={() => true}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const TabSwitcher = () => {
  return (
    <View style={styles.container}>
      <SwitcherButton label="Stopwatch" />
      <SwitcherButton label="Timer" />
    </View>
  );
};

export default TabSwitcher;
