import { Text, StyleSheet } from "react-native";

import Colors from "../../util/colors";

function instructionText(props) {
    return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
}

export default instructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "open-sans-regular",
        color: Colors.accent500,
        fontSize: 24
    }
})