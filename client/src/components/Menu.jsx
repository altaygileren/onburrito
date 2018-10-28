import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Col, Row } from 'react-bootstrap';


const Menu = (props) => {
    const meatList = props.meats.map((data) => {
        return (
            <li className="foodLi">{data}</li>
        )
    });
    const sidesList = props.sides.map((sides) => {
        return (
            <li className="foodLi">{sides}</li>
        )
    });
    const toppingsList = props.toppings.map((toppings) => {
        return (
            <li className="foodLi">{toppings}</li>
        )
    });
    return (
        <div className="centerEver">
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={4} lg={4}>
                        <Fade left>
                            <div className="menuSection">
                                <h3 className="menuListHeader">Organic Meats</h3>
                                {meatList}
                            </div>
                        </Fade>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Fade bottom>
                            <div className="menuSection">
                                <h3 className="menuListHeader">Sides</h3>
                                {sidesList}
                            </div>
                        </Fade>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Fade right>
                            <div className="menuSection">
                                <h3 className="menuListHeader">Toppings</h3>
                                {toppingsList}
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Menu;