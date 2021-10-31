import React, {useRef} from 'react';

const AddPlan = () => {
    const nameRef = useRef();
    const locationRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();

    const handlePlan = e => {
        const name = nameRef.current.value;
        const location = locationRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;

        const newPlan = {name, location, desc, img, price};

        fetch('http://localhost:5000/plans', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlan)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Plan added successfully");
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    return (
        <div className='my-4 py-4 container text-center box-container'>
            <h2 className='mb-4'>Add New Plan</h2>
            <form onSubmit={handlePlan} className="row g-3 w-75 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Plan Name" ref={nameRef}/>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Location" ref={locationRef}/>
                </div>
                <div className="col-md-12">
                    <textarea name="desc" className="form-control" placeholder="Description" cols="20" rows="8" ref={descRef}></textarea>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="image url" ref={imgRef}/>
                </div>
                <div className="col-md-12">
                    <input type="number" className="form-control" placeholder="price" ref={priceRef}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary">Add New Plan</button>
                </div>
            </form>
        </div>
    );
};

export default AddPlan;