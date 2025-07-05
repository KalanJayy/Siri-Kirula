import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddCar = () => {

  const {axios,currency} = useAppContext()

  const [image , setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type:'',
    seating_capacity:0,
    location: '',
    description:'',
  })

  const[isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    if(isLoading) return null

    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))

      const {data} = await axios.post('/api/owner/add-car',formData)
       if (data.success){
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: '',
          model: '',
          year: 0,
          pricePerDay: 0,
          category: '',
          transmission: '',
          fuel_type:'',
          seating_capacity:0,
          location: '',
          description:'',
        })
       } else {
        toast.error(data.message)
       }
    } catch (error) {
       toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='px-4 py-10 md:pxx-10 flex-1'>
      <Title title='Add new product' subTitle='Fill in details to list a new product'></Title>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        {/* Car Image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h14 rounded cursor-pointer' />
            <input type="file" id='car-image' accept='image/*' hidden onChange={e=> setImage(e.target.files[0])} />
          </label>
          <p>Upload a picture of product</p>
        </div>

        {/* Car brand and model */}
        <div className='grid gird-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='add brand' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e=> setCar({...car, brand: e.target.value})}/>
          </div>

          <div className='flex flex-col w-full hidden'>
            <label>Model</label>
            <input type="text" placeholder='add model'  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e=> setCar({...car, model: e.target.value})}/>
          </div>

        </div>

        {/* Car year price and category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full hidden'>
            <label>Year</label>
            <input type="number" placeholder='2025'  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e=> setCar({...car, year: e.target.value})}/>
          </div>

          <div className='flex flex-col w-full'>
            <label>Daily price ({currency})</label>
            <input type="number" placeholder='100' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e=> setCar({...car, pricePerDay: e.target.value})}/>
          </div>

          <div className='flex flex-col w-full'>
            <label>Category</label>
              <select onChange={e=> setCar({...car, category:e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a category</option>
                <option value="Traditional">Traditional</option>
                <option value="Modern">Modern</option>
              </select>
          </div>
        </div>

        {/* Car features */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full hidden'>
            <label>Transmission</label>
              <select onChange={e=> setCar({...car, transmission:e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
          </div>
          <div className='flex flex-col w-full hidden'>
            <label>Fuel type</label>
              <select onChange={e=> setCar({...car, fuel_type:e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a fuel type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
              </select>
          </div>

          <div className='flex flex-col w-full hidden'>
            <label>Seating Capacity</label>
              <input type="number" placeholder='4'  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e=> setCar({...car, seating_capacity: e.target.value})}/>
          </div>
        </div>
        
        {/* Car location */}
        <div className='flex flex-col w-full'>  
          <label>Location</label>
              <select onChange={e=> setCar({...car, location:e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a location</option>
                <option value="Kiribathgoda">Kiribathgoda</option>
                <option value="Pilimathalawa">Pilimathalawa</option>
              </select>
        </div>

        {/* Descripition */}
        <div className='flex flex-col w-full'>
            <label>Description</label>
              <textarea rows={5} placeholder='Write a description about your product' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={e=> setCar({...car, description: e.target.value})}/>
        </div>

        <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'> 
          <img src={assets.tick_icon} alt="" />
          {isLoading ? 'Listing....':'List your product'}
        </button> 

      </form>
    </div>
  )
}

export default AddCar