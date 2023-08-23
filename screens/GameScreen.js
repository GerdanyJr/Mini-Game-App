import { View, StyleSheet, Text, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton"

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber);
    const [guess, setGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            props.onGameOver()
        } 
    }, [guess, props.userNumber, props.onGameOver])

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < props.userNumber) ||
            (direction === 'lower' && currentGuess < props.userNumber)) {
                Alert.alert("Don't lie", 'You know that this is wrong...', [{
                    text: 'Sorry', style: 'cancel'
                }]);
                return;
            }

        if (direction == - 'lower') {
            maxBoundary == currentGuess - 1;
        } else {
            minBoundary == currentGuess + 1;
        }
        const newRdnNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setGuess(newRdnNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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