import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons"

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem"

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (guess === props.userNumber) {
            props.onGameOver(guessRounds.length)
        }
    }, [guess, props.userNumber, props.onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && guess < props.userNumber) ||
            (direction === 'lower' && guess < props.userNumber)) {
            Alert.alert("Don't lie", 'You know that this is wrong...', [{
                text: 'Sorry', style: 'cancel'
            }]);
            return;
        }

        if (direction == - 'lower') {
            maxBoundary == guess - 1;
        } else {
            minBoundary == guess + 1;
        }
        const newRdnNumber = generateRandomBetween(minBoundary, maxBoundary, guess);
        setGuess(newRdnNumber);
        setGuessRounds((prevState) => [newRdnNumber, ...prevState,]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color={"white"} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color={"white"} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index} guess={guessRoundsListLength - itemData.index}>{itemData.item}</GuessLogItem>}
                    keyExtractor={(item) => item}
                />
            </View>
            <Text>Log rounds</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    InstructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});

export default GameScreen;