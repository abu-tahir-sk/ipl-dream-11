import { CiFlag1 } from "react-icons/ci";
import PropTypes from 'prop-types'; 


const Player = ({ player }) => {
      
      const {id,player_name,player_img,country_name,player_rounder,player_hand,price} = player;
     
      return (
            <div className='p-3 shadow-lg rounded-md border'> 
                <div className=''>
                  <img className='h-60 w-full rounded-lg' src={player_img} alt="" />
                </div>
                <div>
                  <h4 className='font-bold py-3'>
                  
            {player_name}</h4>
                 
                </div>
                <div className='flex justify-between pb-2'>
                  <div className="flex items-center gap-2">
                        <p className="text-gray-900"><CiFlag1></CiFlag1></p>
                  <p className='text-gray-400'>{country_name}</p>
                  </div>
                  <button className='py-1 px-2 font-bold border-2 rounded-lg'>{player_rounder}</button>
                </div>
                <h5 className='font-bold py-1'>Rating</h5>
               <div className='flex justify-between pb-2'>
                   <h6 className='font-bold'>Hand bat:</h6>
                <p className='text-gray-500'>{player_hand}</p>
               </div>
               <div className="flex justify-between pb-2">
                  <p className='font-bold'>Price: $ {price}</p>
                  <button className='py-1 px-2 font-bold border-2 rounded-lg'>Choose Player</button>
               </div>
            </div>
      );
};

Player.propTypes = {
      player: PropTypes.object.isRequited
}

export default Player;