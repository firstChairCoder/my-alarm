import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather as Icon } from "@expo/vector-icons";

import type { ButtonTypes } from "../hooks/use-button-defaults";
import useButtonDefaults from "../hooks/use-button-defaults";
import useButtonAnimation from "../hooks/use-button-animation";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  absolute: {
    position: "absolute"
  },
  absoluteText: {
    fontFamily: "ShareTechMono",
    position: "absolute"
  },
  disabledText: {
    opacity: 0.55
  },
  playIcon: {
    marginLeft: 4
  }
});

interface CustomButtonProps {
  type?: ButtonTypes;
  size?: number;
  disabled?: boolean;
  color?: string;
}

const CustomButton = ({
  type,
  size,
  disabled,
  color = colors.primary
}: CustomButtonProps) => {
  const { maxScale, textStyles, customStyles, iconColor, iconSize } =
    useButtonDefaults({ type, size });
  const { animStyle, bgColorAnimate, scaleInOut } = useButtonAnimation({
    color: disabled ? colors.inactive : color,
    maxScale
  });
  return (
    <Pressable onPress={() => true}>
      <View style={styles.container}>
        <Animated.View style={[animStyle, customStyles]} />
        <Text
          style={[
            textStyles,
            styles.absoluteText,
            disabled && styles.disabledText
          ]}
        >
          text
        </Text>
        <View style={styles.absolute}>
          <Icon
            name="play"
            style={styles.playIcon}
            size={iconSize}
            color={iconColor}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CustomButton;
