import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="foot">
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12} lg={3}>
                        <p className="footerHeader">About</p>
                        <ul className="footerList">
                            <li>Company</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Statement</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <p className="footerHeader">Stay Connected</p>
                        <ul className="footerList">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Google</li>
                            <li>YouTube</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <p className="footerHeader">Other</p>
                        <ul className="footerList">
                            <li>Talk to us</li>
                            <li>Newsroom</li>
                            <li>Careers</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <p className="footerHeader">Built with</p>
                        <ul className="footerList">
                            <li>React</li>
                            <li>Ruby On Rails</li>
                            <li>React-Bootstrap</li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Footer;