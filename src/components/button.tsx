import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather as Icon } from "@expo/vector-icons";
import { useEffect, useState } from "react";

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

type IconNames = "play" | "pause" | "repeat" | "plus" | "edit-2";

interface CustomButtonProps {
  type?: ButtonTypes;
  size?: number;
  disabled?: boolean;
  color?: string;
  label?: string;
  icon?: IconNames;
  secondIcon?: IconNames;
  secondIconState?: boolean;
  onPress: () => void;
}

const CustomButton = ({
  type,
  size,
  disabled,
  color = colors.primary,
  label,
  icon,
  onPress,
  secondIconState,
  secondIcon
}: CustomButtonProps) => {
  const [activeIcon, setActiveIcon] = useState(icon);
  const { maxScale, textStyles, customStyles, iconColor, iconSize } =
    useButtonDefaults({ type, size });
  const { animStyle, bgColorAnimate, scaleInOut } = useButtonAnimation({
    color: disabled ? colors.inactive : color,
    maxScale
  });

  const toggleIcon = () => {
    if (secondIcon) {
      setActiveIcon(secondIconState ? secondIcon : icon);
      bgColorAnimate(secondIconState ? false : true);
    }
  };

  useEffect(toggleIcon, [secondIconState]);

  const handleOnPress = () => {
    if (!disabled) {
      onPress();
      scaleInOut();
    }
  };
  return (
    <Pressable onPress={handleOnPress}>
      <View style={styles.container}>
        <Animated.View style={[animStyle, customStyles]} />
        {type === "TEXT" ? (
          <Text
            style={[
              textStyles,
              styles.absoluteText,
              disabled && styles.disabledText
            ]}
          >
            {label}
          </Text>
        ) : (
          <View style={styles.absolute}>
            <Icon
              name={activeIcon}
              style={activeIcon === "play" && styles.playIcon}
              size={iconSize}
              color={iconColor}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default CustomButton;
