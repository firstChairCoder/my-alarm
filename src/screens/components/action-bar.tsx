import { StyleSheet, View } from "react-native";

import { CustomButton } from "../../components";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  }
});

const ActionBar = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <CustomButton color={colors.black} size={50} />
      <CustomButton color={colors.primary} size={90} type="CIRCLE" />
      <CustomButton color={colors.black} size={50} />
      <CustomButton color={colors.black} size={50} />
    </View>
  );
};

export default ActionBar;
