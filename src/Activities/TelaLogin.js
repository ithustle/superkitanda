import React from 'react';
import { Image, StyleSheet, View, Button, Text, TextInput, Keyboard } from 'react-native';

const imgFundo = require('../imgs/fundo.png');
const logo = require('../imgs/logo_white.png');

export default class Login extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <Image source={imgFundo} style={styles.fundo} >
                <View style={styles.container} >
                    <View style={styles.contentLogo} >
                        <Image source={logo} style={styles.logotipo} resizeMode="stretch" />
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
                        <Button 
                            title="Entrar"
                            color="#184"
                            accessibilityLabel="Entrar para a sua conta"
                            onPress={
                                () => {
                                    navigate("Mercados");
                                    Keyboard.dismiss();
                                }
                            }
                        />
                        <View style={styles.line} />
                        <Button 
                            title="Abrir conta"
                            color="#c93"
                            accessibilityLabel="Abrir uma nova conta"
                            onPress={
                                () => null
                            }
                        />
                    </View>
                    <View style={{ position: "absolute", left: 0, right: 0, bottom: 10 }} >
                        <View style={styles.line} />
                        <Text style={{color: "#fff", textAlign: "center"}} >Experimente! A primeira entrega é grátis!</Text>
                    </View>
                </View>
            </Image>
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
        marginBottom: 20
    },
    textoBemVindo: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    textoNormal: {
        fontSize: 13,
        color: '#fff',
    },
    contentBotao: {
        justifyContent: 'center'
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
        borderWidth: .2, 
        borderColor: "#fff", 
        marginTop: 10,
        marginBottom: 10
    }
});
