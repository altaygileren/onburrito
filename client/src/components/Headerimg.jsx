import React, { Component } from 'react';
import Randomizer from 'react-randomizer';
import { Image } from 'react-bootstrap';

class Headerimg extends Component {
    state = {
        headerImages: [
            "burrito1", "burrito2", "burrito3",
        ],
        fact: [
            "The word burrito means Little Donkey in Spanish",
            "The burrito is the traditional food of the city of Juarez in northern Mexico",
            "Burritos in the US are bigger and contain multiple ingredients such as meat or vegetables",
            "In 1958 the burrito appeared in the Oxford English Dictionary",
            "When fried, Burritos become Chimichangas",
            "Burritos made in Mexico are made thin and small and are only made with one ore two ingredients",
            "The three most popular burrito types in the U.S. are wet burritos, break burritos, and California burritos",
            "The flour tortilla is usually lightly grilled or steamed, to soften it and make it more pliable"
        ]
    }

    componentDidMount() {
        const header = Randomizer.randomizeArray(this.state.headerImages);
        const fact = Randomizer.randomizeArray(this.state.fact);
        this.setState({
            headerImages: header,
            fact: fact
        })
    }

    render() {
        return (
            <div>
                <div className="menuHeaderSection">
                    <Image className="cateringImage" src={`${this.state.headerImages[0]}.jpg`} alt={`${this.state.headerImages[0]}.jpg`} responsive />
                    <div className="textOverImg">{this.state.fact[0]}</div>
                </div>
            </div>
        )
    }
}

export default Headerimg;