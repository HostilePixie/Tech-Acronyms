import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ScrollView, Text } from "react-native";

import acronyms from "./acronyms";
import AcronymCard from "./AcronymCard";

export default function App() {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 25,
          alignSelf: "center",
          fontWeight: "300",
          marginBottom: 20,
          marginTop: 45,
          color: "black",
        }}
      >
        Tech Acronyms:
      </Text>
      <ScrollView style={{ marginBottom: 110 }}>
        {Object.keys(acronyms).map((acronym, index) => (
          <AcronymCard label={acronym} text={acronyms[acronym]} key={index} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
