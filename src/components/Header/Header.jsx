import Logo from "/src/assets/image/logo.png"
import banner from "/src/assets/image/banner-main.png"

const Header = () => {
      return (
            <header className="w-11/12 mx-auto py-4">
                <nav className="flex justify-between items-center px-4 py-2 shadow-slate-00 border-b-2 rounded-sm">
                   <div>
                  <img className="w-16 h-14" src={Logo} alt="navbar logo" /> 
                 </div>
                 <nav className="flex justify-center items-center gap-8">
                 <ul className="hidden md:flex gap-4">
                   <li><a className="font-bold text-gray-400"  href="">Home</a  ></li>
                   <li><a className="font-bold text-gray-400"  href="">Teams</a  ></li>
                   <li><a className="font-bold text-gray-400"  href="">Fixture</a  ></li>
                   <li><a className="font-bold text-gray-400"  href="">Schedules</a></li>                
                 </ul>
                  <button className="py-1 px-3 rounded-md shadow-lg border-2 font-bold"><span>0 </span> Coin</button>
                 </nav>
                </nav>
                <div className="my-6 flex justify-center items-center flex-col bg-hero-pattern bg-[#131313] rounded-md bg-cover py-8 md:py-16">
                  <img src={banner} alt="" />
                  <div className="text-center">
                        <h2 className="font-bold text-4xl py-4 text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p className="font-bold text-gray-400 pb-6">Beyond Boundaries Beyond Limits</p>
                        
                              <button className="border-2 border-[#ebff3c] py-3 p-1 rounded-lg"><a className="font-bold bg-[#E7FE29] px-4 py-2 rounded-lg">Claim Free Credit</a></button>
                        
                  </div>
                </div>
                 
            </header>
      );
};

export default Header;