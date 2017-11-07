import React from 'react';
import { ImageBackground, StyleSheet, View, Button, Text, ScrollView } from 'react-native';

import ListaMercados from '../components/ListaMercados';

const imgFundo = require('../imgs/fundo.png');
const logo = require('../imgs/logo_white.png');

export default class Mercado extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={imgFundo} style={styles.fundo} >
                <View style={styles.container} >
                    <View style={styles.contentLogo} >
                        <ImageBackground source={logo} style={styles.logotipo} resizeMode="stretch" />
                    </View>
                    <View style={styles.contentTexto} >
                        <Text source={logo} style={styles.textoNormal} >Olá, Célio Garcia</Text>
                        <Text source={logo} style={styles.textoNormal} >Aqui estão os mercados que localizamos perto de ti:</Text>
                    </View>
                    <ScrollView>
                        <ListaMercados nav={navigate} />
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        margin: 12,
        marginTop: 40
    },
    fundo: {
        flex: 1,
        width: null
    },
    contentLogo:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    logotipo: {
        width: 210,
        height: 48
    },
    contentTexto: {
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: "transparent"
    },
    textoNormal: {
        fontSize: 14,
        color: '#fff',
        paddingBottom: 5
    },
    campoDeTexto: {
        height: 50,
        padding: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: "rgba(255,255,255,.2)",
        marginBottom: 10
    }
});

