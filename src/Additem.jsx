// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';


// const AddItem = () => {
    
//     const { register } = useForm();
//     const navigate = useNavigate();

//     const handleSubmit = event => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const Size = event.target.Size.value;
//         const description = event.target.description.value;
//         const price = event.target.price.value;
//         const quantity = event.target.quantity.value;
        

//         const product = { name, Size, description, price, quantity };

//         // Send data to server

//         // await axios.post("https://localhost:4000/api/product");
//         // .then((res)=>{
//         //     setEmpData(res.data.data)
//         //     setMessage(res.data.message)
//         // })
        

//         fetch('http://localhost:4001/api/product', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(product)
//         })
//             .then(res =>{
//                 event.target.name.value=""
//                 event.target.Size.value=""
//                 event.target.description.value=""
//                 event.target.price.value=""
//                 event.target.quantity.value=""
                
//                 res.json()} )
//             .then(result => {
//                 toast('New Item Succesfully Inserted', result);
//             })

//         // // Count users entry
//         // axios.post('https://warehouse-management-jdvj.onrender.com/user-entry', product)
//         //     .then(response => {
//         //         console.log('Entry Successful', response);
//         //         event.target.reset();
//         //     })

//     };

//     const navigateManageItem = () => {
//         navigate('/Manageitem');
//     }
//     return (
//         <div style={{marginTop:'100px',marginLeft:'50px'}}    className='mb-5'>
//             <form className='mt-5' onSubmit={handleSubmit}>
//                 <input style={{width:'500px'}} className='mb-3 w-200px' {...register("name")} placeholder='Product name' required /> <br />

//                 <input className='mb-3 w-200px' {...register("Size")} placeholder='Size' required /> <br />

//                 <input style={{ height: 'calc(2.5em + 4.75rem + 2px)' }} className='mb-3 w-200px' {...register("description")} placeholder='Description' required /><br />

//                 <input className='mb-3 w-200px' type="number" {...register("price")} placeholder="Price" /> <br />

//                 <input className='mb-3 w-200px' type="number" {...register("quantity")} placeholder="Quantity" required /> <br />
//                 <input className='btn btn-dark' type="submit" />

//                 <button onClick={navigateManageItem} className='btn btn-success' style={{ backgroundColor:'red'}}>Go to Inventory</button>
//             </form>
//         </div>
//     );
// };

// export default AddItem;   


// AddItem.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AddItem.css';

const AddItem = () => {
    const { register } = useForm();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const Size = event.target.Size.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        const product = { name, Size, description, price, quantity };

        fetch('http://localhost:4001/api/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((res) => {
                event.target.name.value = '';
                event.target.Size.value = '';
                event.target.description.value = '';
                event.target.price.value = '';
                event.target.quantity.value = '';
                res.json();
            })
            .then((result) => {
                toast('New Item Successfully Inserted', result);
            });
    };

    const navigateManageItem = () => {
        navigate('/Manageitem');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input className="form-input" {...register('name')} placeholder="Product name" required />
                <br />

                <input className="form-input" {...register('Size')} placeholder="Size" required />
                <br />

                

                <input className="form-input" type="number" {...register('price')} placeholder="Price" />
                <br />

                <input className="form-input" type="number" {...register('quantity')} placeholder="Quantity" required />
                <br />

                <input className="form-button" type="submit" value="Add Item" />

                <button className="go-to-inventory" onClick={navigateManageItem}>
                    Go to Inventory
                </button>
            </form>
        </div>
    );
};

export default AddItem;
