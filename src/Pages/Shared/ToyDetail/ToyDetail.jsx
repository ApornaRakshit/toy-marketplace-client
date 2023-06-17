import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {useParams } from 'react-router-dom';

const ToyDetail = () => {
    const { _id } = useParams();
    const [item, setItem] = useState({});
    

    useEffect(() => {
        fetch(`https://toy-marketplace-server-six-lake.vercel.app/toy/${_id}`)
            .then(res => res.json())
            .then(data => setItem(data)); 
    }, []);


    return (
        <div style={{ marginBottom: "150px" }} className='d-flex justify-content-center'>
            <div>
                <div className='text-center mt-5 mb-5'>
                    <h2>Toy Detail</h2>
                    <h5>Id: {_id}</h5>

                    <Card style={{ maxwidth: "50%" }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Price: ${item.price}</Card.Text>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>Rating: {item.rating}</Card.Text>
                            <Card.Text>Quantity: {item.quantity}</Card.Text>
                            <Button variant="btn-success">Delivered</Button>
                            
                            
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    );
};

export default ToyDetail;