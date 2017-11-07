import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomHeader = ({ titulo, subtitulo }) => (
    <View>
        <Text style={styles.headerTitle}>{titulo}</Text>
        <Text style={styles.headerSubtitle}>{`${subtitulo} - Toque para alterar`}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 18,
        color: "#fff"
    },
    headerSubtitle: {
        fontSize: 12,
        color: "#fff"
    }
});

export default CustomHeader;