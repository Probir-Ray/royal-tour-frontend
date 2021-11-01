import React, { useEffect, useState } from 'react';

const ManageOrder = props => {
    const order = props.order;
    // const [key, setKey] = useState([]);
    // const keys = order.key;
    // // console.log(keys);
    // useEffect(() => {
    //     fetch('http://localhost:5000/orders/keys', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(keys)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setKey(data);
    //     });
    // }, [])


    // Delete an order
    const handelDeleteOrder = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Deleted successfully');
            }
        })
    }

    // Update order status
    const handelUpdateOrder = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then()
    }

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
                            <button onClick={() => handelUpdateOrder(order._id)} className="btn btn-primary btn-sm">Approved</button>
                            &nbsp;

                            <button onClick={() => handelDeleteOrder(order._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default ManageOrder;