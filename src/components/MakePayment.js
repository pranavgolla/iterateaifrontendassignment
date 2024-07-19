import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MakePayment = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePayment = () => {
        // Simple validation example
        if (!amount || !paymentMethod) {
            setError('Please fill in all fields.');
            return;
        }

        // Handle payment processing logic here
        console.log('Processing payment...');
        console.log('Amount:', amount);
        console.log('Payment Method:', paymentMethod);

        // Navigate to a confirmation or success page
        navigate('/payment-success');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Make Payment</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div style={{ marginTop: '20px' }}>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
                />
            </div>

            <div style={{ marginTop: '20px' }}>
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
                >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="UPI">UPI</option>
                </select>
            </div>

            <div style={{ marginTop: '20px' }}>
                <button
                    type="button"
                    onClick={handlePayment}
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default MakePayment;
