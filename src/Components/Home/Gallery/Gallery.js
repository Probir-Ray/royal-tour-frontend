import React from 'react';

const Gallery = () => {
    return (
        <div className="container-fluid my-5 p-0 py-5">
            <h3 className="text-center my-4 text-uppercase">Gallery</h3>
            <div className="row m-0 p-0">
                <div className="col-md-4 p-0">
                    <img className="card-img-top img-fluid" src="https://i.ibb.co/G39GYy8/AQUA-DOME.jpg" alt="" />
                </div>
                <div className="col-md-4 p-0">
                    <img className="card-img-top img-fluid" src="https://i.ibb.co/2kJ098C/HOSHINOYA-Fuji.jpg" alt="" />
                </div>
                <div className="col-md-4 p-0">
                    <img className="card-img-top img-fluid" src="https://i.ibb.co/2YgRpkH/Grand-Miramar.jpg" alt="" />
                </div>
                <div className="col-md-4 p-0">
                    <img className="card-img-top img-fluid" src="https://i.ibb.co/cx5Y7XF/explora-Patagonia.jpg" alt="" />
                </div>
                <div className="col-md-4 p-0">
                    <img className="card-img-top img-fluid" src="https://i.ibb.co/QryM7mn/Kakslauttanen-Arctic-Resort.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;