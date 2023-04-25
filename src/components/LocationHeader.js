import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LocationHeader = ({type, dimension, planet, residents}) => {
    return (
        <div className="location-header">            
            <Container>
                <Row className='location-title'>
                    <Col><h1>{planet}</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Type</h4>
                        <p>{type}</p>
                    </Col>
                    <Col>
                        <h4>Dimension</h4>
                        <p>{dimension}</p>
                    </Col>
                    <Col>
                        <h4>Residents</h4>
                        <p>{residents}</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default LocationHeader;