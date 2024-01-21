import { Modal, StyleSheet, Text, View } from "react-native";
import type { FC, ReactNode } from "react";
import { useContext } from "react";

import { colors } from "../constants/colors";
import AppContext from "../context";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    borderColor: colors.inactive,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1,
    bottom: 0,
    elevation: 5,
    height: "70%",
    left: -1,
    position: "absolute",
    width: "100%",
    zIndex: 3
  },
  header: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    color: colors.white,
    fontFamily: "ShareTechMono",
    fontSize: 22,
    paddingVertical: 20
  },
  innerWrapper: {
    alignItems: "center",
    flex: 1,
    width: "100%"
  }
});

interface ModalWrapperProps {
  children: ReactNode;
  modalOpen: boolean;
  header: string;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  modalOpen,
  header
}) => {
  const {
    controls: { isModalOpen }
  } = useContext(AppContext);
  return (
    <Modal
      transparent
      animationType="slide"
      visible={modalOpen}
      onRequestClose={() => {
        isModalOpen && isModalOpen(false);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.innerWrapper}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;
