import { useEffect, useState } from "react";
import {
  cancelAnimation,
  Easing,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

const STOPWATCH_DURATION = 3600000;

export default function useCounter({ timer }: { timer?: number }) {
  const duration = timer ? timer : STOPWATCH_DURATION;
  const [value, setValue] = useState(timer ? duration : 0);
  const [started, setStarted] = useState(false);

  const animPaused = useSharedValue(true);
  const animCounter = useSharedValue(timer ? duration : 0);

  const updateValue = (val: number) => setValue(val);

  useDerivedValue(() => {
    runOnJS(updateValue)(animCounter.value);
  });

  useEffect(() => {
    () => cancelAnimation(animCounter);
  }, []);

  function startAnimation() {
    animCounter.value = withPause(
      withRepeat(
        withTiming(timer ? 0 : duration, {
          duration,
          easing: Easing.linear
        }),
        timer ? 1 : -1
      ),
      animPaused
    );
  }

  const controls = {
    play: (play: boolean) => {
      animPaused.value = !play;
      if (play && !started) {
        startAnimation();
        setStarted(true);
      }
    },
    reset: () => {
      cancelAnimation(animCounter);
      setStarted(false);
      animCounter.value = timer ? duration : 0;
    }
  };
  return { value, controls };
}
