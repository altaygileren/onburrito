import React from 'react';
import { FormGroup, Col, Form, ControlLabel, FormControl, Checkbox, Button, Grid } from 'react-bootstrap';

const Signup = () => {
    return (
        <div className="loginForm">
            <Grid>
                <Col lg={6} sm={12}>
                <h3 className="timelineHeadline">Sign up</h3>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
    </Col>
                            <Col sm={12}>
                                <FormControl type="email" placeholder="Email" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
    </Col>
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={12}>
                                <Button type="submit">Sign in</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Col lg={6} sm={6}>
                    <div className="signupTextBox">
                        <h3 className="timelineHeadline">Why you should join</h3>
                        <p className="signupParagraph">Sign up now so you can start to 
                        use our platform and place your orders for your onBurrito Burrito! 
                        also take a stroll through our website to learn more about us, 
                        our quality and top notch service.</p>
                    </div>
                </Col>
            </Grid>
        </div>
    )
}

export default Signup;