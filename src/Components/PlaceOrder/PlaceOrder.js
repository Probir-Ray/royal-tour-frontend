import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const { planId } = useParams();
    const [order, setOrder] = useState({});
    const [plans, setPlans] = useState([]);
    useEffect(()=> {
        const url = `https://lit-hamlet-13017.herokuapp.com/place-order/${planId}`;
        fetch(url).then(res => res.json()).then(data => setOrder(data));
    }, []);

    return (
        <div className="container-fluid my-5 py-3">
            <h3 className="text-center mb-4">Place Order</h3>
            <div className="w-75 text-center mx-auto">
                <div className="order-desc">
                    <img className="w-75 mb-3" src={order.img} alt="" />
                    <h5>{order.name}</h5>
                    <p>{order.desc}</p>
                    <p>Location: {order.location}</p>
                    <h4 className="mb-4">$ {order.price}</h4>
                    <Link to={`/`}><button className="btn btn-primary">Booking</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;