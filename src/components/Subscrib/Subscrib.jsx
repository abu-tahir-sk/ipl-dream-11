import React from 'react';

function Subscrib() {
      return (
            <div className='sm:hidden md:flex border-2 border-sky-100 w-8/12 mx-auto -mb-24 relative rounded-lg mt-20 z-10'>
                  <div className='flex justify-center items-center flex-col bg-gradient-to-r from-sky-200 via-sky-50 to-orange-100 py-14 w-full rounded-lg px-3'>
                        <h2 className='font-bold text-2xl md:text-3xl text-center text-gray-700 py-5'>Subscribe to our Newsletter</h2>
                        <p className='text-center pb-3'>Get the latest updates and news right in your inbox!</p>
                        <div className='md:flex justify-center items-end gap-6 py-6'>
                              <input className='py-3 rounded-lg md:px-10 hover:border-2' type="email" placeholder='Enter your email'/>
                              <button className='px-5 py-3 border-2 rounded-lg bg-gradient-to-r from-orange-400 to-red-400 font-bold'>Subscribe</button>
                        </div>
                  </div>
            </div>
      );
}

export default Subscrib;