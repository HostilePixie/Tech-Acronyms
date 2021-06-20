import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import FadeInOut from "react-native-fade-in-out";

import styles from "./styles";

const App = ({ label, text }) => {
  // const colors = ["orange", "#d41829", "#008fa3", "#d35f00", "#bab21c"];
  const colors = [
    "#378696",
    "#208ca2",
    "#30b2be",
    "#51b7ba",
    "#42dad9",
    "#50bfc3",
    "#00a0b0",
  ];
  const [textState, setTextState] = useState(label || "");

  const changeText = () => {
    if (textState == label) {
      setTextState(text);
    } else {
      setTextState(label);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable
        activeOpacity={1}
        style={{
          ...styles.card,
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        onPress={() => {
          changeText();
        }}
      >
        <Text style={styles.text}>{textState}</Text>
      </Pressable>
    </View>
  );
};

export default App;
