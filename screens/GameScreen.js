import { View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";

import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min,max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen(props) {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber);
    const [guess, setGuess] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <Text>Log rounds</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});

export default GameScreen;