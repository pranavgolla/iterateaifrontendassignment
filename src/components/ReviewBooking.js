import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const steps = [
    { label: 'Add Details', path: '/add-details' },
    { label: 'Review Booking', path: '/review-booking' },
    { label: 'Fill Name, Gotra & Address', path: '/fill-name-gotra-address' },
    { label: 'Make Payment', path: '/make-payment' }
];

const ReviewBooking = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { mobileNumber, name } = location.state || {};

    const handleContinue = () => {
        navigate('/fill-name-gotra-address'); // Navigate to the /fill-name-gotra-address route
    };

    return (
        <Container className="mt-5">
            <h2>Review Booking</h2>

            {/* Steps Indicator */}
            <div style={{ marginBottom: '20px' }}>
                <h2>Booking Steps</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {steps.map((step, index) => (
                        <div key={step.path} style={{ textAlign: 'center', flex: 1 }}>
                            <div
                                style={{
                                    padding: '10px',
                                    backgroundColor:
                                        index < 1
                                            ? '#6c757d' // Completed steps
                                            : index === 1
                                            ? '#007bff' // Current step
                                            : '#e9ecef', // Upcoming steps
                                    color:
                                        index < 1
                                            ? '#fff'
                                            : index === 1
                                            ? '#fff'
                                            : '#000',
                                    borderRadius: '5px',
                                    fontWeight: 'bold'
                                }}
                            >
                                {step.label}
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    style={{
                                        height: '4px',
                                        backgroundColor: '#007bff',
                                        width: '100%',
                                        margin: '5px 0'
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Details */}
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
                            <Button variant="primary" onClick={handleContinue}>Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ReviewBooking;
