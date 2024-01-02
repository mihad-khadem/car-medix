
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const {id} = useParams()
    const loaderCars = useLoaderData()
    const { _id, name, image, price, details, type, rating, brandName } = loaderCars
    console.log(loaderCars);
   


    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('carName')
        const brandName = form.get('brand')
        const image = form.get('img')
        const type = form.get('type')
        const details = form.get('details')
        const rating = form.get('rating')
        const price = form.get('price')
        const updatedCar = {
            name,
            brandName,
            image,
            type,
            details,
            rating,
            price
        }
        fetch(`http://localhost:3000/car/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                Swal.fire("Updated", "Your Supercar has been Updated.", "success");
            }
        })
        .catch(err => {
            Swal.fire("Error", err.message);
        })
    }

    return (
        <div>
            <div className='flex justify-center p-20 lg:w-[1000px] '>
                <div><img src={image} alt="" /></div>
            </div>
            <div className='shadow-2xl rounded-lg mt-5 p-10'>
                <h2 className='text-3xl text-center font-semibold'>Update</h2>
                <hr className='mx-80 m-2' />
                <form onSubmit={handleUpdate}>
                    <h2 className='font-bold'>Car Name : </h2>
                    <input type="text" defaultValue={name}  name='carName' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <h2 className='font-bold'>Brand Name : </h2>
                    <input type="text" defaultValue={brandName} name='brand' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <br />
                    <h2 className='font-bold'>Image URL : </h2>
                    <input type="text" name='img' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <h2 className='font-bold'>Type : </h2>
                    <input type="text" defaultValue={type} name='type' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <br />
                    <h2 className='font-bold'>Price : </h2>
                    <input type="text" defaultValue={price} name='price' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <h2 className='font-bold'>Short description : </h2>
                    <input type="text" defaultValue={details} name='details' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <br />
                    <h2 className='font-bold'>Rating : </h2>
                    <input type="text" defaultValue={rating} name='rating' className='border-2 outline-none w-full p-2 rounded-lg focus:shadow-lg' />
                    <div className='flex justify-center mt-5'>
                        <input className='btn btn-neutral' type="submit" value="Update Car" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;