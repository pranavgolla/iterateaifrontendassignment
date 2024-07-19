// import React from 'react';

// const PujaBooking = () => {
//   return (
//     <div>
//       <h2>Puja Booking Page</h2>
//       {/* Add your booking form or details here */}
//     </div>
//   );
// }

// export default PujaBooking;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PujaBooking = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>No Puja has been booked yet</h2>
      <p>
        Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja.
      </p>
      <Button as={Link} to="/puja" variant="primary">
        Book Puja Now
      </Button>
    </div>
  );
}

export default PujaBooking;
