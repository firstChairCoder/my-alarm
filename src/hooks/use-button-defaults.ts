import { StyleSheet } from "react-native";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";

import { colors } from "../constants/colors";

export type ButtonTypes = "CIRCLE" | "RECTANGLE" | "TEXT";

interface useButtonDefaultsProps {
  size?: number;
  type?: ButtonTypes;
}

interface ButtonDefaultsProps {
  iconSize?: number;
  iconColor?: string;
  maxScale?: number;
  customStyles?: StyleProp<ViewStyle>;
  textStyles?: TextStyle;
}

function setDefaults({
  iconColor = colors.white,
  iconSize = 32,
  maxScale = 1.1,
  customStyles,
  textStyles
}: ButtonDefaultsProps) {
  return { iconColor, iconSize, maxScale, customStyles, textStyles };
}

export default function useButtonDefaults({
  size = 80,
  type = "RECTANGLE"
}: useButtonDefaultsProps) {
  const styles = StyleSheet.create({
    ["CIRCLE"]: {
      borderRadius: size / 2,
      height: size,
      width: size
    },
    ["RECTANGLE"]: {
      borderColor: colors.gray,
      borderRadius: size,
      height: size,
      width: size + 50
    },
    ["TEXT"]: {
      borderRadius: size,
      height: size,
      maxHeight: 50,
      width: size + 70
    }
  });

  const defaults: { [key in ButtonTypes]: ButtonDefaultsProps } = {
    ["CIRCLE"]: setDefaults({
      customStyles: styles[type]
    }),
    ["RECTANGLE"]: setDefaults({
      customStyles: styles[type],
      iconColor: colors.gray,
      iconSize: 24
    }),
    ["TEXT"]: setDefaults({
      customStyles: styles[type],
      textStyles: {
        textTransform: "uppercase",
        color: colors.white,
        fontSize: 16
      }
    })
  };
  return defaults[type];
}
