import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";

import { CustomButton } from "../../components";
import { colors } from "../../constants/colors";
import AppContext from "../../context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  }
});

const ActionBar = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  const { controls, play } = useContext(AppContext);
  return (
    <View style={[styles.container, style]}>
      {controls.reset && (
        <CustomButton
          color={colors.black}
          size={50}
          icon="repeat"
          onPress={controls.reset}
        />
      )}
      {controls.play && (
        <CustomButton
          color={colors.primary}
          size={90}
          type="CIRCLE"
          icon="play"
          secondIcon="pause"
          secondIconState={play}
          onPress={controls.play}
        />
      )}
      {controls.new && (
        <CustomButton
          color={colors.black}
          size={50}
          icon="plus"
          onPress={() => controls.new && controls.new()}
        />
      )}
      {controls.edit && (
        <CustomButton
          color={colors.black}
          size={50}
          icon="edit-2"
          onPress={() => controls.isModalOpen && controls.isModalOpen(true)}
        />
      )}
    </View>
  );
};

export default ActionBar;
