import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Puja = () => {
    const navigate = useNavigate();

    const handleCardClick = (content) => {
        navigate('/puja-detail', { state: { content } });
    };

    return (
        <Container style={{ marginTop: '20px' }}> {/* Add top margin here */}
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Puja 1</Card.Title>
                            <Card.Text>
                                Details about Puja 1.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleCardClick('Details about Puja 1')}>
                                Participate
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Puja 2</Card.Title>
                            <Card.Text>
                                Details about Puja 2.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleCardClick('Details about Puja 2')}>
                                Participate
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Puja 3</Card.Title>
                            <Card.Text>
                                Details about Puja 3.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleCardClick('Details about Puja 3')}>
                                Participate
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Puja;
