import React, {useState} from 'react'
import axios from 'axios'

function Hero() {

    const [image, setImage] = useState('')

    const handelChange = () => {
        axios.get(`https://api.generated.photos/api/v1/faces?api_key=xC0YmHpB1uXHgygv5eFA8w&order_by=random`)
    
    .then(res => {
        const uri = res.data.faces[0].urls[4][512];
        uri && setImage(uri);
    })
    .catch(err => {
        console.log(err.message);
    });
    };

  return (
    <div>
        <h1 className='sm:text-5xl md:text-6xl font-bold mt-10'>AI Photo Generator</h1>
        <div className='flex justify-center mt-10'>
            {image && <img className='flex justify-center' src={image} alt='AI Face'/>}
        </div>
        <div className='flex justify-center pb-10'>
            <button className='mt-10 group relative w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='button' onClick={handelChange}>New Image</button>
        </div>
    </div>

  )
}

export default Hero