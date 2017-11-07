import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, TextInput, Keyboard } from 'react-native';

const imgFundo = require('../imgs/fundo.png');
const logo = require('../imgs/logo_white.png');

export default class Login extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground source={imgFundo} style={styles.fundo} >
                <View style={styles.container} >
                    <View style={styles.contentLogo} >
                        <ImageBackground source={logo} style={styles.logotipo} resizeMode="stretch" />
                    </View>
                    <View style={styles.contentTexto} >
                        <Text source={logo} style={styles.textoBemVindo} >Seja Bem-vindo de volta!</Text>
                        <Text source={logo} style={styles.textoNormal} >Entre em sua conta e comece a comprar</Text>
                    </View>
                    <View style={styles.contentInputText} >
                        <TextInput 
                            placeholder="Nº de telefone"
                            placeholderTextColor="#fff"
                            keyboardType="phone-pad"
                            style={styles.campoDeTexto}
                            onChange={() => null}
                        />
                        <TextInput 
                            placeholder="Palavra-passe"
                            placeholderTextColor="#fff"
                            secureTextEntry
                            style={styles.campoDeTexto}
                            onChange={() => null}
                        />
                    </View>
                    <View style={styles.contentBotao} >
                        <TouchableHighlight
                            style={styles.botaoEntrar}
                            activeOpacity={0.8}
                            underlayColor="#195f26"
                            onPress={
                                () => {
                                    navigate("Mercados");
                                    Keyboard.dismiss();
                                }
                            }
                        >
                        <Text style={styles.textoBotao} >Entrar</Text>
                        </TouchableHighlight>
                        <View style={styles.line} />
                        <TouchableHighlight
                            style={styles.botaoAbreConta}
                            activeOpacity={0.8}
                            underlayColor="#C7882A"
                            onPress={
                                () => null
                            }
                        >
                        <Text style={styles.textoBotao} >Abrir conta</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ position: "absolute", left: 0, right: 0, bottom: 10 }} >
                        <View style={styles.line} />
                        <Text style={{color: "#fff", textAlign: "center", backgroundColor: 'transparent'}} >Experimente! A primeira entrega é grátis!</Text>
                    </View>
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
        margin: 12
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
        width: 256,
        height: 59
    },
    contentTexto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'transparent'
    },
    textoBemVindo: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    textoNormal: {
        fontSize: 14,
        color: '#fff',
    },
    contentBotao: {
        justifyContent: 'center'
    },
    botaoEntrar: {
        height: 30,
        flex: 1,
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#195f26"
    },
    botaoAbreConta: {
        height: 30,
        flex: 1,
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#C7882A"
    },
    textoBotao: {
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center"
    },
    contentInputText: {
        marginBottom: 20
    },
    campoDeTexto: {
        height: 50,
        padding: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: "rgba(255,255,255,.2)",
        marginBottom: 10
    },
    line: {
        borderWidth: .6, 
        borderColor: "#fff", 
        marginTop: 10,
        marginBottom: 10
    }
});
