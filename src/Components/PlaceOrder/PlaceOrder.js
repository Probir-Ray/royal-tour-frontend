import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { planId } = useParams();
    const [order, setOrder] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    
    const onSubmit = data => {
        const id = order._id;
        data.key = id;
        const status = false;
        data.status = status;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert('Order process Successfully');
                reset();
            }
        })
    }

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
                </div>
            </div>
            <div className="w-75 mx-auto my-4 py-4">
            <h3 className="text-center">Booking Information</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 w-75 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input placeholder="Name" className="form-control" defaultValue={user.displayName} {...register("name")} />
                </div>
                <div className="col-md-12">
                    <input placeholder="Email" className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-md-12">
                    <input placeholder="Address" className="form-control" defaultValue="" {...register("address")} />
                </div>
                <div className="col-md-12">
                    <input placeholder="City" className="form-control" defaultValue="" {...register("city")} />
                </div>
                <div className="col-md-12">
                    <input placeholder="Phone Number" className="form-control" defaultValue="" {...register("phone")} />
                </div>
                
                    <input type="submit" className="form-control btn btn-primary"/>
                </form>                     
            </div>
        </div>
    );
};

export default PlaceOrder;