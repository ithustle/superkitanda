import React from "react";
import { ScrollView } from "react-native";

import Mercados from "./Mercados";

export default class ListaMercados extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = { listaDeMercados: [] };
        this._navigate = this.props.nav;
    }

    
    componentWillMount() {
        let lojas = [
            {
                mercado: "Produtos Naturais Muenho",
                tipo: "Mini-mercado"
            },
            {
                mercado: "Cesta básica",
                tipo: "Mini-mercado"
            }
        ];

        this.setState({ listaDeMercados: lojas });
    }

    render() {
        return (
            <ScrollView>
                { this.state.listaDeMercados.map(item => (<Mercados key={item.mercado} mercado={item.mercado} tipo={item.tipo} item={item} navega={this._navigate} />) ) }
            </ScrollView>
        );
    }
}