import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    
    return (
        <div className="container my-4 py-5">
            <h3 className="text-center">All Orders</h3>
            <div className="orders-container table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Tour Name</th>
                            <th scope="col">Status</th>
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

export default ManageAllOrders;