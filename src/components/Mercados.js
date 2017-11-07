import React from "react";
import { Text, Image, View, StyleSheet, TouchableHighlight } from "react-native";

const fotoTemp = require("../imgs/akon.png");

export default class Mercados extends React.Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={"rgba(255,255,255, .1)"}
                onPress={() => this.props.navega("Home", { mercado: this.props.mercado, tipo: this.props.tipo })}
            >
                <View style={styles.contentWrap} >
                    <View style={styles.contentMercado} >
                        <View style={styles.contentFoto} >
                            <Image source={fotoTemp} resizeMode="stretch" style={styles.foto} />
                        </View>
                        <View style={styles.contentFoto} >
                            <Text style={styles.textoMercado} >{this.props.item.mercado}</Text>
                            <Text style={styles.textoTipoMercado} >{this.props.item.tipo}</Text>
                        </View>
                        
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    contentWrap: {
        backgroundColor: "rgba(255, 255, 255, .2)",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 10
    },
    contentMercado: {
        flexDirection: "row"
    },
    contentFoto: {
        flexDirection: "column",
        justifyContent: "center",
        marginRight: 10
    },
    textoMercado: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "400"
    },
    textoTipoMercado:{
        color: "#ccc",
        fontSize: 12
    },
    foto: {
        width: 62,
        height: 62
    }
});