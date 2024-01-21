import type { StyleProp, TextStyle } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { FC } from "react";

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
  },
  primary: { color: colors.primary },
  secondary: { color: colors.secondary }
});

const SwitcherButton = ({
  label,
  onPress,
  labelStyle
}: {
  label: string;
  onPress: () => void;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </Pressable>
  );
};

interface TabSwitcherProps {
  activeIndex: number;
  setTabIndex: (index: number) => void;
}

const TabSwitcher: FC<TabSwitcherProps> = ({ activeIndex, setTabIndex }) => {
  return (
    <View style={styles.container}>
      <SwitcherButton
        label="Stopwatch"
        onPress={() => setTabIndex(0)}
        labelStyle={activeIndex === 0 && styles.primary}
      />
      <SwitcherButton
        label="Timer"
        onPress={() => setTabIndex(1)}
        labelStyle={activeIndex === 0 && styles.secondary}
      />
    </View>
  );
};

export default TabSwitcher;
