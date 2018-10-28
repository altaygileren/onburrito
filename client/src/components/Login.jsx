import React from 'react';
import { FormGroup, Col, Form, ControlLabel, FormControl, Checkbox, Button, Grid } from 'react-bootstrap';

const Login = (props) => {
    return (
        <div className="loginForm">
            <Grid>
                <Col lg={6} sm={12}>
                    <h3 className="timelineHeadline">Login</h3>
                    <form onChange={props.handleChange}>
                        <label htmlFor="email">Email: </label>
                        <br />
                        <input
                            name="email"
                            onChange={props.handleChange}
                            value={props.email.value}
                            type="email"
                        />
                        <br /><br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input
                            name="password"
                            onChange={props.handleChange}
                            value={props.password.value}
                            type="password"
                        />
                    </form>
                    <br />
                    <button onClick={props.login} onChange={props.handleChange}>Login</button>
                </Col>
            <Col lg={6} sm={12}>
                <h3 className="timelineHeadline">Let's get started on your burrito!</h3>
                <p className="signupParagraph">Just log right in and you'll be on your way
                        to ordering your personalized Burrito from onBurrito!</p>
            </Col>
            </Grid>
        </div >
    )
}

export default Login;