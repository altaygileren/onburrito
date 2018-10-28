import React, { Component } from 'react';
import { Col, Grid } from 'react-bootstrap';




const User = (props) => {
    return (
        <div className="Order">
            <div>
                <h3 className="timelineHeadline">It's time to place your order</h3>


            </div>
            <h3 className="timelineHeadline">Most recent orders to help inspire your order</h3>
            <Grid>
                {props.ordersReceived.map(meal => {
                    return (
                        <Col lg={3}>
                            <p key={meal.id} className="individualAllOrders">
                                {meal.meats}<br />
                                {meal.sides}<br />
                                {meal.toppings}
                            </p>
                        </Col>
                    )
                })}
            </Grid>
        </div>
    )
}


export default User;