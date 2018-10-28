import React from 'react';
import Box from './InfoBoxes';
import Timeline from './Timeline';
import { Grid, Col, Row } from 'react-bootstrap';

const Home = (props) => {
    return (
        <Grid>
            <Row className="show-grid">
                {props.boxInfo.map((event, index) => {
                    return (
                        <Col xs={12} md={4} lg={4} sm={12}>
                            <div className="boxStyle">
                                <Box headline={event.headline} desc={event.desc} />
                            </div>
                        </Col>
                    )
                })}
            </Row>
            <Timeline />
        </Grid>
    )
}

export default Home;