import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";

import { colors } from "../../constants/colors";
import { CustomButton } from "../../components";
import AppContext from "../../context";
import formatTime from "../../utils/format-time";

const styles = StyleSheet.create({
  header: {
    color: colors.gray,
    fontFamily: "ShareTechMono",
    fontSize: 16,
    textAlign: "center"
  },
  container: {
    flex: 1,
    marginTop: 4,
    width: "80%"
  },
  tableGroup: {
    flex: 3
  },
  headerWrapper: {
    flexDirection: "row",
    marginTop: 8
  },
  position: {
    borderWidth: 1,
    flex: 1,
    padding: 8,
    width: 50
  },
  time: {
    borderBottomWidth: 2,
    borderWidth: 1,
    flex: 2,
    padding: 8
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    flex: 1
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row"
  },
  positionText: {
    color: colors.white,
    fontFamily: "ShareTechMono",
    fontSize: 18,
    textTransform: "uppercase"
  },
  timeWrapper: {
    borderColor: colors.inactive,
    borderWidth: 1,
    flex: 2,
    flexDirection: "row",
    padding: 8
  },
  colon: {
    color: colors.gray,
    fontFamily: "ShareTechMono",
    fontSize: 16,
    marginHorizontal: 2
  },
  itemText: {
    color: colors.white,
    fontFamily: "ShareTechMono",
    fontSize: 18
  }
});

function TimedItem({
  finish,
  time,
  position
}: {
  finish: number;
  time: number;
  position: number;
}) {
  const formattedFinish = formatTime({ time: finish });
  const formattedTime = formatTime({ time });
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.positionText}>{position + 1}</Text>
      <View style={styles.timeWrapper}>
        <Text style={styles.itemText}>{formattedFinish.minutes}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.itemText}>{formattedFinish.seconds}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.itemText}>{formattedFinish.milliseconds}</Text>
      </View>

      <View style={styles.timeWrapper}>
        <Text style={styles.itemText}>{formattedTime.minutes}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.itemText}>{formattedTime.seconds}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.itemText}>{formattedTime.milliseconds}</Text>
      </View>
    </View>
  );
}

const Results = () => {
  const { saved } = useContext(AppContext);
  const [sorted, setSorted] = useState(false);

  const normalSaved =
    saved &&
    [...saved].map((item, index) => {
      return {
        position: index,
        finish: item,
        time: index - 1 < 0 ? item : saved[index] - saved[index - 1]
      };
    });

  const fastestSaved =
    normalSaved && [...normalSaved].sort((a, b) => a.time - b.time);
  return (
    <View style={styles.container}>
      <View style={styles.tableGroup}>
        <View style={styles.headerWrapper}>
          <View style={styles.position}>
            <Text style={styles.header}>Pos</Text>
          </View>
          <View style={styles.time}>
            <Pressable>
              <Text style={styles.header}>Finish</Text>
            </Pressable>
          </View>
        </View>
        <FlatList
          data={sorted ? fastestSaved : normalSaved}
          keyExtractor={(item) => item.position.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TimedItem
              finish={item.finish}
              time={item.time}
              position={item.position}
            />
          )}
        />
      </View>

      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <CustomButton
            color={colors.black}
            type="TEXT"
            size={50}
            label="Close"
            onPress={() => true}
          />
        </View>

        <View style={styles.button}>
          <CustomButton
            color={colors.primary}
            type="TEXT"
            size={50}
            label="Sort"
            onPress={() => true}
          />
        </View>
      </View>
    </View>
  );
};

export default Results;
