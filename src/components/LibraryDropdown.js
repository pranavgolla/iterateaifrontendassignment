import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const LibraryDropdown = ({ items }) => {
    return (
        <NavDropdown title="Library" id="library-nav-dropdown">
            {items.map((item, index) => (
                <NavDropdown.Item key={index} href={item.href}>
                    {item.label}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
};

export default LibraryDropdown;
