import React, { Component } from 'react';
import { NutritionLabel } from 'react-fda-nutrition-facts';
import { Grid, Row, Col } from 'react-bootstrap';


class Nutrition extends Component {

    state = {
        nutrition: [
            {
                servingSize: "",
                servingsPerContainer: "",
                calories: "",
                totalFat: "",
                saturatedFat: "",
                transFat: "",
                cholesterol: "",
                sodium: "",
                totalCarbs: "",
                dietaryFiber: "",
                sugars: "",
                protein: "",
                vitaminA: "",
                vitaminC: "",
                calcium: "",
                iron: ""
            }
        ]
    }
    // Meats
    chickenSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 180,
                    totalFat: 7,
                    saturatedFat: 3,
                    transFat: 0,
                    cholesterol: 125,
                    sodium: 310,
                    totalCarbs: 0,
                    dietaryFiber: 0,
                    sugars: 0,
                    protein: 32,
                    vitaminA: 0,
                    vitaminC: 2,
                    calcium: 3,
                    iron: 8
                }
            ],
            color: 'red'
        })
    }
    steakSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 150,
                    totalFat: 6,
                    saturatedFat: 2.5,
                    transFat: 0,
                    cholesterol: 80,
                    sodium: 330,
                    totalCarbs: 1,
                    dietaryFiber: 1,
                    sugars: 0,
                    protein: 21,
                    vitaminA: 10,
                    vitaminC: 0,
                    calcium: 2,
                    iron: 15
                }
            ]
        })
    }
    carnitasSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 210,
                    totalFat: 12,
                    saturatedFat: 7,
                    transFat: 0,
                    cholesterol: 65,
                    sodium: 450,
                    totalCarbs: 0,
                    dietaryFiber: 0,
                    sugars: 0,
                    protein: 23,
                    vitaminA: 0,
                    vitaminC: 0,
                    calcium: 2,
                    iron: 6
                }
            ]
        })
    }
    barbacoaSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 170,
                    totalFat: 7,
                    saturatedFat: 2.5,
                    transFat: 0,
                    cholesterol: 65,
                    sodium: 530,
                    totalCarbs: 2,
                    dietaryFiber: 1,
                    sugars: 0,
                    protein: 24,
                    vitaminA: 6,
                    vitaminC: 0,
                    calcium: 2,
                    iron: 15
                }
            ]
        })
    }
    chorizoSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 300,
                    totalFat: 18,
                    saturatedFat: 9,
                    transFat: 0,
                    cholesterol: 80,
                    sodium: 810,
                    totalCarbs: 2,
                    dietaryFiber: 1,
                    sugars: 0,
                    protein: 32,
                    vitaminA: 12,
                    vitaminC: 1,
                    calcium: 3,
                    iron: 8
                }
            ]
        })
    }
    sofritasSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 150,
                    totalFat: 10,
                    saturatedFat: 1.5,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 560,
                    totalCarbs: 9,
                    dietaryFiber: 3,
                    sugars: 5,
                    protein: 8,
                    vitaminA: 17,
                    vitaminC: 23,
                    calcium: 17,
                    iron: 17
                }
            ]
        })
    }
    // Fillings
    whiteRiceSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 210,
                    totalFat: 4,
                    saturatedFat: 4,
                    transFat: 0.5,
                    cholesterol: 0,
                    sodium: 350,
                    totalCarbs: 40,
                    dietaryFiber: 1,
                    sugars: 0,
                    protein: 4,
                    vitaminA: 1,
                    vitaminC: 3,
                    calcium: 1,
                    iron: 3
                }
            ]
        })
    }
    brownRiceSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 210,
                    totalFat: 6,
                    saturatedFat: 1,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 190,
                    totalCarbs: 36,
                    dietaryFiber: 2,
                    sugars: 0,
                    protein: 4,
                    vitaminA: 2,
                    vitaminC: 2,
                    calcium: 1,
                    iron: 4
                }
            ]
        })
    }
    blackBeansSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 130,
                    totalFat: 1.5,
                    saturatedFat: 0,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 210,
                    totalCarbs: 22,
                    dietaryFiber: 7,
                    sugars: 2,
                    protein: 8,
                    vitaminA: 2,
                    vitaminC: 2,
                    calcium: 4,
                    iron: 10
                }
            ]
        })
    }
    pintoBeansSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 130,
                    totalFat: 1.5,
                    saturatedFat: 0,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 210,
                    totalCarbs: 21,
                    dietaryFiber: 8,
                    sugars: 1,
                    protein: 8,
                    vitaminA: 0,
                    vitaminC: 2,
                    calcium: 4,
                    iron: 10
                }
            ]
        })
    }
    fajitaSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 2.5,
                    servingsPerContainer: 1,
                    calories: 20,
                    totalFat: 0,
                    saturatedFat: 0,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 150,
                    totalCarbs: 5,
                    dietaryFiber: 1,
                    sugars: 2,
                    protein: 1,
                    vitaminA: 4,
                    vitaminC: 60,
                    calcium: 2,
                    iron: 2
                }
            ]
        })
    }

    // Toppings
    quesoSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 2,
                    servingsPerContainer: 1,
                    calories: 120,
                    totalFat: 8,
                    saturatedFat: 5,
                    transFat: 0,
                    cholesterol: 25,
                    sodium: 200,
                    totalCarbs: 4,
                    dietaryFiber: 0.5,
                    sugars: 1,
                    protein: 6,
                    vitaminA: 6,
                    vitaminC: 0,
                    calcium: 17,
                    iron: 0
                }
            ]
        })
    }
    tomatoSauceSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 3.5,
                    servingsPerContainer: 1,
                    calories: 25,
                    totalFat: 0,
                    saturatedFat: 0,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 550,
                    totalCarbs: 4,
                    dietaryFiber: 1,
                    sugars: 1,
                    protein: 0,
                    vitaminA: 1,
                    vitaminC: 14,
                    calcium: 1,
                    iron: 5
                }
            ]
        })
    }
    sourCreamSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 2,
                    servingsPerContainer: 1,
                    calories: 110,
                    totalFat: 9,
                    saturatedFat: 7,
                    transFat: 0,
                    cholesterol: 40,
                    sodium: 30,
                    totalCarbs: 2,
                    dietaryFiber: 0,
                    sugars: 2,
                    protein: 2,
                    vitaminA: 8,
                    vitaminC: 0,
                    calcium: 6,
                    iron: 0
                }
            ]
        })
    }
    cheeseSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 1,
                    servingsPerContainer: 1,
                    calories: 110,
                    totalFat: 8,
                    saturatedFat: 5,
                    transFat: 0,
                    cholesterol: 30,
                    sodium: 190,
                    totalCarbs: 1,
                    dietaryFiber: 0,
                    sugars: 0,
                    protein: 6,
                    vitaminA: 7,
                    vitaminC: 0,
                    calcium: 20,
                    iron: 0
                }
            ]
        })
    }
    guacamoleSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 4,
                    servingsPerContainer: 1,
                    calories: 230,
                    totalFat: 22,
                    saturatedFat: 3.5,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 370,
                    totalCarbs: 8,
                    dietaryFiber: 6,
                    sugars: 1,
                    protein: 2,
                    vitaminA: 7,
                    vitaminC: 7,
                    calcium: 2,
                    iron: 7
                }
            ]
        })
    }
    lettuceSelect = () => {
        this.setState({
            nutrition: [
                {
                    servingSize: 1,
                    servingsPerContainer: 1,
                    calories: 5,
                    totalFat: 0,
                    saturatedFat: 0,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 0,
                    totalCarbs: 1,
                    dietaryFiber: 1,
                    sugars: 0,
                    protein: 0,
                    vitaminA: 35,
                    vitaminC: 10,
                    calcium: 0,
                    iron: 2
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <Grid>
                <div className="mobileText">View the Nutrition facts by picking an ingredient and scrolling to the bottom <br /><i class="fa fa-arrow-down" aria-hidden="true"></i>
                </div>
                <Row className="show-grid">
                <Col className="boxg" md={6} mdPush={6}>
                        <h3 className="nutriListHeader">MEATS</h3>
                        <ul className="foodNutriList">
                            <li onClick={this.steakSelect}>Steak</li>
                            <li onClick={this.chickenSelect}>Chicken</li>
                            <li onClick={this.carnitasSelect}>Carnitas</li>
                            <li onClick={this.barbacoaSelect}>Barbacoa</li>
                            <li onClick={this.chorizoSelect}>Chorizo</li>
                            <li onClick={this.sofritasSelect}>Sofritas</li>
                        </ul>
                        <hr />
                        <h3 className="nutriListHeader">FILLINGS</h3>
                        <ul className="foodNutriList">
                            <li onClick={this.whiteRiceSelect}>White Rice</li>
                            <li onClick={this.brownRiceSelect}>Brown Rice</li>
                            <li onClick={this.blackBeanssSelect}>Black Beans</li>
                            <li onClick={this.pintoBeansSelect}>Pinto Beans</li>
                            <li onClick={this.fajitaSelect}>Fajita Vegetables</li>
                        </ul>
                        <hr />
                        <h3 className="nutriListHeader">TOPPINGS</h3>
                        <ul className="foodNutriList">
                            <li onClick={this.quesoSelect}>Queso</li>
                            <li onClick={this.tomatoSauceSelect}>Fresh Tomato Sauce</li>
                            <li onClick={this.sourCreamSelect}>Sour Cream</li>
                            <li onClick={this.cheeseSelect}>Cheese</li>
                            <li onClick={this.guacamoleSelect}>Guacamole</li>
                            <li onClick={this.lettuceSelect}>Lettuce</li>
                        </ul>
                    </Col>
                    <Col className="boxg" md={6} mdPull={6}>
                        <NutritionLabel
                            servingSize={this.state.nutrition[0].servingSize}
                            servingsPerContainer={this.state.nutrition[0].servingsPerContainer}
                            calories={this.state.nutrition[0].calories}
                            totalFat={this.state.nutrition[0].totalFat}
                            saturatedFat={this.state.nutrition[0].saturatedFat}
                            transFat={this.state.nutrition[0].transFat}
                            cholesterol={this.state.nutrition[0].cholesterol}
                            sodium={this.state.nutrition[0].sodium}
                            totalCarbs={this.state.nutrition[0].totalCarbs}
                            dietaryFiber={this.state.nutrition[0].dietaryFiber}
                            sugars={this.state.nutrition[0].sugars}
                            protein={this.state.nutrition[0].protein}
                            vitaminA={this.state.nutrition[0].vitaminA}
                            vitaminC={this.state.nutrition[0].vitaminC}
                            calcium={this.state.nutrition[0].calcium}
                            iron={this.state.nutrition[0].iron}
                        />
                    </Col>
                </Row>
                </Grid>
            </div >
        )
    }
}

export default Nutrition;