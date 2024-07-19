import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const BookingReview = () => {
    const location = useLocation();
    const { mobileNumber, name } = location.state || {};

    return (
        <Container className="mt-5">
            <h2>Review Booking</h2>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mahavidya Purnima Special</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Maa Bagalamukhi Tantra Yukta Havan</Card.Subtitle>
                            <Card.Text>
                                <strong>Package:</strong> Individual Puja<br />
                                <strong>Amount:</strong> ₹851<br />
                                <strong>Booking Details:</strong><br />
                                Mobile Number: {mobileNumber}<br />
                                Name: {name}
                            </Card.Text>
                            <Button variant="primary">Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BookingReview;
