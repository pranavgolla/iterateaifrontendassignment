import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
    { label: 'Add Details', path: '/add-details' },
    { label: 'Review Booking', path: '/review-booking' },
    { label: 'Fill Name, Gotra & Address', path: '/fill-name-gotra-address' },
    { label: 'Make Payment', path: '/make-payment' }
];

const FillNameGotraAddress = () => {
    const [callNumber, setCallNumber] = useState('');
    const [firstMemberName, setFirstMemberName] = useState('');
    const [gotra, setGotra] = useState('');
    const [receivePrasad, setReceivePrasad] = useState(false);
    const navigate = useNavigate();

    const handleProceed = () => {
        // Handle the proceed action here
        console.log('Proceeding with booking...');
        console.log('Call Number:', callNumber);
        console.log('First Member Name:', firstMemberName);
        console.log('Gotra:', gotra);
        console.log('Receive Prasad:', receivePrasad);
        // Navigate to the next step
        navigate('/make-payment');
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2>Booking Steps</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {steps.map((step, index) => (
                        <div key={step.path} style={{ textAlign: 'center', flex: 1 }}>
                            <div
                                style={{
                                    padding: '10px',
                                    backgroundColor:
                                        index < 2
                                            ? '#6c757d' // Completed steps
                                            : index === 2
                                            ? '#007bff' // Current step
                                            : '#e9ecef', // Upcoming steps
                                    color:
                                        index < 2
                                            ? '#fff'
                                            : index === 2
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

            <div style={{ marginTop: '20px' }}>
                <h4>Your WhatsApp Number</h4>
                <p>Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on the number below.</p>
                <p><strong>+91 </strong></p>

                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="callNumber">I have a different number for calling:</label>
                    <input
                        type="text"
                        id="callNumber"
                        value={callNumber}
                        onChange={(e) => setCallNumber(e.target.value)}
                        placeholder="Enter call number (optional)"
                        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="firstMemberName">First member name:</label>
                    <input
                        type="text"
                        id="firstMemberName"
                        value={firstMemberName}
                        onChange={(e) => setFirstMemberName(e.target.value)}
                        placeholder="Enter first member's name"
                        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="gotra">Fill participant’s gotra:</label>
                    <input
                        type="text"
                        id="gotra"
                        value={gotra}
                        onChange={(e) => setGotra(e.target.value)}
                        placeholder="Enter gotra"
                        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
                    />
                    <p><i>Gotra will be recited during the puja.</i></p>
                    <button
                        type="button"
                        onClick={() => setGotra('')}
                        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
                    >
                        I do not know my gotra
                    </button>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={receivePrasad}
                            onChange={() => setReceivePrasad(!receivePrasad)}
                        />
                        Do you want to get puja prasad?
                    </label>
                    <p><i>Prasad of worship will be sent within 8-10 days after completion of puja.</i></p>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <button
                        type="button"
                        onClick={handleProceed}
                        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
                    >
                        Proceed to Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FillNameGotraAddress;
