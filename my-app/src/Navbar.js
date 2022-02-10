import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='flex justify-center pb-10 space-x-5'>
            <Link to='/randompeople'><button className='mt-10 group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='button'>Random People</button></Link>
            <Link to='/male'><button className='mt-10 group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='button'>Male</button></Link>
            <Link to='/female'><button className='mt-10 group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='button'>Female</button></Link>
            <Link to='/hairwhite'><button className='mt-10 group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='button'>White Hair</button></Link>
        </div>
    </div>
  )
}

export default Navbar