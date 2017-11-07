import React from "react";
import { StackNavigator } from "react-navigation";

import TelaLogin from "./src/Activities/TelaLogin";
import TelaMercados from "./src/Activities/TelaMercados";
import TelaHome from "./src/Activities/TelaHome";

const Navigator = StackNavigator (
    {
        Login: {screen: TelaLogin},
        Mercados: {screen: TelaMercados},
        Home: { screen: TelaHome}
    },
    {
        initialRouteName: "Login"
    }
);

export default class App extends React.Component {
    render() {
        return(
            <Navigator screenProps={this.props} />
        );
    }
}
