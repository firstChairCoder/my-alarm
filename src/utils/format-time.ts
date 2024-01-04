function formatNumber(num: number) {
  return num < 10 ? "0" + num : num;
}

const formatTime = ({
  time,
  formatted = true
}: {
  time: number;
  formatted?: boolean;
}) => {
  const date = new Date(time);
  return formatted
    ? {
        hours: formatNumber(date.getUTCHours()),
        minutes: formatNumber(date.getUTCMinutes()),
        seconds: formatNumber(date.getUTCSeconds()),
        milliseconds: formatNumber(date.getUTCMilliseconds())
          .toString()
          .slice(0, 2)
      }
    : {
        hours: formatNumber(date.getUTCHours()),
        minutes: formatNumber(date.getUTCMinutes()),
        seconds: formatNumber(date.getUTCSeconds()),
        milliseconds: formatNumber(date.getUTCMilliseconds())
      };
};

export default formatTime;
