




import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

const packageStyle = {
    background: '#f9f9f9',
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', // Make the div take up the full height of the column
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Packages = () => {
    const [showModal, setShowModal] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API or handle it locally)
        console.log('Mobile Number:', mobileNumber);
        console.log('Name:', name);
        // Close the modal after submission
        handleCloseModal();
        navigate('/review-booking'); // Navigate to the Add Details page
    };

    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row className="w-100">
                    <Col xs={12} className="d-flex flex-wrap justify-content-center">
                        <div style={{ width: '100%', maxWidth: '1200px' }}>
                            <h2 className="text-center">Select Puja Package</h2>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                                    <div style={packageStyle}>
                                        <div>
                                            <h3>₹851 Individual Puja</h3>
                                            <p>Puja for 1 Person</p>
                                            <p>Pandit ji will call out your name and gotra during the puja sankalp.</p>
                                            <p>Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.</p>
                                            <p>Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.</p>
                                            <p>Sacred tirth prasad will be sent to your address within 8-10 days.</p>
                                        </div>
                                        <Button variant="primary" onClick={handleShowModal}>PARTICIPATE</Button>
                                    </div>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                                    <div style={packageStyle}>
                                        <div>
                                            <h3>₹1251 Partner Puja</h3>
                                            <p>Puja for 2 People</p>
                                            <p>Pandit ji will call out your name and gotra during the puja sankalp.</p>
                                            <p>Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.</p>
                                            <p>Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.</p>
                                            <p>Sacred tirth prasad will be sent to your address within 8-10 days.</p>
                                        </div>
                                        <Button variant="primary" onClick={handleShowModal}>PARTICIPATE</Button>
                                    </div>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                                    <div style={packageStyle}>
                                        <div>
                                            <h3>₹2001 Family + Bhog</h3>
                                            <p>Puja for 4 People</p>
                                            <p>Pandit ji will call out your name and gotra during the puja sankalp.</p>
                                            <p>Bhog consisting of fruits, sweets, and dry fruits will be offered to Maa Bagalamukhi at Maa Bagalamukhi Temple.</p>
                                            <p>Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.</p>
                                            <p>Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.</p>
                                            <p>Sacred tirth prasad will be sent to your address within 8-10 days.</p>
                                        </div>
                                        <Button variant="primary" onClick={handleShowModal}>PARTICIPATE</Button>
                                    </div>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                                    <div style={packageStyle}>
                                        <div>
                                            <h3>₹3001 Joint Family + Bhog + Flower Basket</h3>
                                            <p>Puja for 6 People</p>
                                            <p>Pandit ji will call out your name and gotra during the puja sankalp.</p>
                                            <p>Bhog consisting of fruits, sweets, and dry fruits, will be offered to Maa Bagalamukhi at Maa Bagalamukhi Temple along with floral tributes.</p>
                                            <p>Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.</p>
                                            <p>Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.</p>
                                            <p>Sacred tirth prasad will be sent to your address within 8-10 days.</p>
                                        </div>
                                        <Button variant="primary" onClick={handleShowModal}>PARTICIPATE</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Fill Your Details for Puja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formMobileNumber">
                            <Form.Label>Enter Your Whatsapp Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your mobile number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                required
                            />
                            <Form.Text className="text-muted">
                                Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on the number provided.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Whatsapp Share Number</Form.Label>
                            <Form.Text className="text-muted">
                                {mobileNumber}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Next
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Packages;
