import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? statusbar.currentHeight + 22
  : 64;
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Natalino Gomes</Text>
      </View>
      <TouchableOpacity>
        <Feather name="user" size={27} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  content: {},
});
