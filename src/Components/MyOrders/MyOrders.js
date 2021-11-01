import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://lit-hamlet-13017.herokuapp.com/all-orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    return (
        <div className="container my-4 py-5">
            <h3 className="text-center">Orders</h3>
            <div className="orders-container table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Tour</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    
                    {
                        orders.map(order => <ManageOrder key={order._id} order={order}></ManageOrder>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;