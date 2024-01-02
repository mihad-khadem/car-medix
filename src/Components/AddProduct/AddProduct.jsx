import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const carName = form.get('carName')
        const brandName = form.get('brand')
        const img = form.get('img')
        const type = form.get('type')
        const price = form.get('price')
        const description = form.get('description')
        const rating = form.get('rating')
        const carDetails = {
            carName,
            brandName,
            img,
            type,
            price,
            description,
            rating
        }
        console.log(carDetails);

        // Send cars to sever side
        fetch('http://localhost:3000/car',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(carDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire('success', 'Car Added', 'success')
            }
            else{
                Swal.fire('error', 'Opps !!', 'error')
            }
            console.log(data);
        })
    }
    return (
        <div>
            <div className='shadow-2xl rounded-lg mt-5 p-10'>
                <h2 className='text-3xl text-center font-semibold'>Add Product</h2>
                <hr className='mx-80 m-2' />
                <form onSubmit={handleSubmit}>
                    <h2 className='font-bold'>Car Name : </h2>
                    <input type="text" name='carName' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <h2 className='font-bold'>Brand Name : </h2>
                    <input type="text" name='brand' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <br />
                    <h2 className='font-bold'>Image URL : </h2>
                    <input type="text" name='img' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <h2 className='font-bold'>Type : </h2>
                    <input type="text" name='type' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <br />
                    <h2 className='font-bold'>Price : </h2>
                    <input type="text" name='price' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <h2 className='font-bold'>Short description : </h2>
                    <input type="text" name='description' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <br />
                    <h2 className='font-bold'>Rating : </h2>
                    <input type="text" name='rating' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <div className='flex justify-center mt-5'>
                        <input className='btn btn-neutral' type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;