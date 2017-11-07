import React from 'react';
import { Image, StyleSheet, View, Button, Text, ScrollView, TouchableHighlight } from 'react-native';

import CustomHeader from './../components/CustomHeader';

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => (
        {
            headerTitle: <CustomHeader titulo={navigation.state.params.mercado} subtitulo={navigation.state.params.tipo} />,
            headerLeft: null,
            headerStyle: {
                backgroundColor: "#136",
            },
            headerTitleStyle: {
                justifyContent: "center"
            },
            headerTintColor: "#fff"
        }
    )

    render() {
        const { goBack } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container} >
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        margin: 12
    }
});
