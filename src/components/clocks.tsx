import { Circle, Ellipse, Line, Svg } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import useCircle from "../hooks/use-circle";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  svg: {
    // transform: [
    //   {
    //     rotateZ: "270deg"
    //   }
    // ]
  }
});

const BigClock = ({ size = 300 }) => {
  const { radius } = useCircle({ size });
  return (
    <>
      <Svg width={size} height={size} style={styles.svg}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.gray}
          fill={"none"}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeDasharray={6}
        />
      </Svg>
    </>
  );
};

const SmallClock = ({ size = 50, bgColor = colors.dark, strokeWidth = 3 }) => {
  return (
    <Animated.View>
      <Svg width={size} height={size}>
        <Ellipse
          rx={size / 2}
          ry={size / 2}
          cx={size / 2}
          cy={size / 2}
          stroke={colors.black}
          strokeWidth={0}
          fill={bgColor}
        />
        <Line
          stroke={colors.white}
          fill={"none"}
          x1={size / 2}
          y1={size / 2}
          x2={size / 2}
          y2={strokeWidth}
        />
      </Svg>
    </Animated.View>
  );
};

export { BigClock, SmallClock };
