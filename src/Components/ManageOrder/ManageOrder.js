import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrder = props => {
    const order = props.order;
    return (
        <>
            <tbody>
                <tr>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.city}</td>
                    <td>{order.key}</td>
                    <td>{order.status || 'Pending'}</td>
                    <td>
                        <Nav.Link as={Link} to="/">
                            <button className="btn btn-primary btn-sm">Approved</button>
                        </Nav.Link>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default ManageOrder;