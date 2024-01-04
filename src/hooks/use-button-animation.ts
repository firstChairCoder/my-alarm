import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming
} from "react-native-reanimated";

import { colors } from "../constants/colors";

interface useButtonAnimationProps {
  color: string;
  maxScale?: number;
}

export default function useButtonAnimation({
  color,
  maxScale = 1.1
}: useButtonAnimationProps) {
  const bgColor = useSharedValue(0);
  const scale = useSharedValue(1);

  const animConfig = {
    scale: {
      from: 1,
      to: maxScale
    },
    bgColor: {
      from: color,
      to: colors.inactive
    }
  };

  const animStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        bgColor.value,
        [0, 1],
        [animConfig.bgColor.from, animConfig.bgColor.to]
      ),
      transform: [
        {
          scale: scale.value
        }
      ]
    };
  });

  const scaleInOut = () => {
    scale.value = withSequence(
      withTiming(animConfig.scale.to, {
        duration: 150
      }),
      withTiming(animConfig.scale.from, {
        duration: 150
      })
    );
  };

  const bgColorAnimate = (pressed: boolean) => {
    bgColor.value = withSpring(pressed ? 0 : 1);
  };

  return {
    animStyle,
    scaleInOut,
    bgColorAnimate
  };
}
