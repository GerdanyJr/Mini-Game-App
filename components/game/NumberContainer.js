import { View, Text, StyleSheet } from "react-native";

import Colors from "../../util/colors";

function NumberContainer(props) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{props.children}</Text>
    </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        fontFamily: "open-sans-bold",
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
});