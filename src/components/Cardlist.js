import Card from './card';
import React, { Component } from 'react';

export default class Cardlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rowCount = this.props.data.length;
        console.log("card list count: ", rowCount);
        var cards = [];
        for (var i = 0; i < rowCount; i++) {
            cards.push(
                <Card 
                    badge= {this.props.data[i].links.mission_patch_small}
                    name={this.props.data[i].rocket.rocket_name}
                    type={this.props.data[i].rocket.rocket_type}
                    d={this.props.data[i].launch_date_utc}
                    details={this.props.data[i].details} 
                  
                    id={this.props.data[i].flight_number}
                    link= {this.props.data[i].links.wikipedia}
                /> 
            );
        }
		return (
            cards
        );
    }
}
