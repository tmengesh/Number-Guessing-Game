import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Card from "../components/Card";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over! </Text>
      <Card style={styles.summaryContainer}>
        <Text style={styles.title}>Number of rounds: {props.roundsNumber}</Text>
        <Text style={styles.title}>Number was: {props.userNumber}</Text>
      </Card>

      <Card style={styles.summaryContainer}>
        <Button title="NEW GAME" onPress={props.onRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default GameOverScreen;
