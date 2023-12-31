import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen(props) {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../assets/sucess.png')}
            />
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>props.roundsNumebr</Text> rounds to guess the number <Text style={styles.highlight}>props.userNumber</Text>.
        </Text>
        <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});