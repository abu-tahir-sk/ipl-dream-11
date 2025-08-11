function Footer() {
      return (
            <div className="bg-black pt-32">
                  <div className="flex justify-center items-center">
                        <img src="/src/assets/image/logo-footer.png" alt="" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto py-8 border-b-2 border-slate-500">
                        <div className="md:flex flex-col justify-center items-start gap-3 p-6">
                              <h4 className="font-bold text-white">About Us</h4>
                              <p className="text-white text-start text-wrap">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-3 p-6">
                               <h4 className="font-bold text-white">Quick Links</h4>
                             <ul className="md:flex flex-col gap-2 list-outside">
                        <li><a className="text-white"  href="">Home</a  ></li>
                         <li><a className=" text-white"  href="">Teams</a  ></li>
                   <li><a className= "text-white"  href="">Fixture</a  ></li>
                   <li><a className=" text-white"  href="">Schedules</a></li>                
                 </ul>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-3 p-6 ">
                             <h4 className="text-white font-bold">Subscribe</h4>
                              <p className="text-white text-wrap">Subscribe to our newsletter for the latest updates.</p>
                              <div className='md:flex justify-center items-end sm:gap-1 md:gap-3 py-6'>
                              <input className='py-3 rounded-lg px-2 sm:my-3 md:my-0 hover:border-2' type="email" placeholder='Enter your email'/>
                              <button className='px-2 py-3 border-2 rounded-lg bg-gradient-to-r from-orange-400 to-red-400 font-bold'>Subscribe</button>
                        </div>
                        </div>
                  </div>
                  <p className="text-center text-gray-100 py-6">@2024 Your Company All Rights Reserved.</p>
            </div>
      );
}

export default Footer;