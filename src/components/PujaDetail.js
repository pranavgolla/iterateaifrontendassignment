import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutPuja from './AboutPuja';
import Benefits from './Benefits';
import Process from './Process';
import TempleDetails from './TempleDetails';
import Packages from './Packages';
import Countdown from './Countdown';
import SlideShow from './SlideShow';
import { Container, Button, Nav } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import Header from './Header'; // Import the Header component

const PujaDetail = () => {
    const location = useLocation();
    const { content } = location.state;

    const aboutPujaRef = useRef(null);
    const benefitsRef = useRef(null);
    const processRef = useRef(null);
    const templeDetailsRef = useRef(null);
    const packagesRef = useRef(null);

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Measure header height dynamically
        const headerElement = document.getElementById('sticky-header');
        if (headerElement) {
            setHeaderHeight(headerElement.offsetHeight);
        }
    }, []);

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - headerHeight, // Adjust based on sticky header height
            behavior: 'smooth',
        });
    };

    const stickyHeaderStyle = {
        position: 'sticky',
        top: 50, // Space below the main header
        backgroundColor: 'white',
        zIndex: 1000, // Ensure this is below the main header
        borderBottom: '1px solid #ddd',
        padding: '10px 0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const sectionStyle = {
        paddingTop: `${headerHeight}px`, // Padding to prevent overlap by sticky header
    };

    const navLinkStyle = {
        cursor: 'pointer',
        marginRight: '15px',
        color: '#007bff',
        textDecoration: 'underline',
    };

    return (
        <>
            <Header /> {/* Main header */}
            <Container style={{ marginTop: '100px' }}> {/* Adjust margin to make space for the main header */}
                <h1>Puja Detail</h1>
                <p>{content}</p>
                <div style={{ marginTop: '20px' }}>
                    <h2>SATURDAY SHANI SHINGNAPUR SPECIAL</h2>
                    <p>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</p>
                    <p>For Prevention of Misfortunes and Adversities</p>
                    <p><strong>Temple Venue:</strong> Shree Shanidev Temple, Shani Shingnapur, Maharashtra</p>
                    <p><strong>Puja Date:</strong> 20 July, Saturday, Ashadha Shukla Chaturdashi</p>
                    <Countdown />
                    <SlideShow />
                    <p>Till now <strong>2,00,000+</strong> Devotees have participated in Pujas conducted by Sri Mandir Puja Seva.</p>
                    <Button variant="primary" onClick={() => scrollToRef(packagesRef)}>
                        Select Puja Package <FaArrowRight />
                    </Button>
                    
                    {/* Sticky header below the button */}
                    <div id="sticky-header" style={stickyHeaderStyle}>
                        <Nav className="my-4">
                            <Nav.Link style={navLinkStyle} onClick={() => scrollToRef(aboutPujaRef)}>About Puja</Nav.Link>
                            <Nav.Link style={navLinkStyle} onClick={() => scrollToRef(benefitsRef)}>Benefits</Nav.Link>
                            <Nav.Link style={navLinkStyle} onClick={() => scrollToRef(processRef)}>Process</Nav.Link>
                            <Nav.Link style={navLinkStyle} onClick={() => scrollToRef(templeDetailsRef)}>Temple Details</Nav.Link>
                            <Nav.Link style={navLinkStyle} onClick={() => scrollToRef(packagesRef)}>Packages</Nav.Link>
                        </Nav>
                    </div>

                    <div ref={aboutPujaRef} style={sectionStyle}>
                        <AboutPuja />
                    </div>
                    <div ref={benefitsRef} style={sectionStyle}>
                        <Benefits />
                    </div>
                    <div ref={processRef} style={sectionStyle}>
                        <Process />
                    </div>
                    <div ref={templeDetailsRef} style={sectionStyle}>
                        <TempleDetails />
                    </div>
                    <div ref={packagesRef} style={sectionStyle}>
                        <Packages />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default PujaDetail;
