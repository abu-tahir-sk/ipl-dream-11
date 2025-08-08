import { MdDeleteForever } from "react-icons/md";

const Selected = ({selected,handleDelete}) => {
     
      return (
            <div className="w-11/12 mx-auto grid grid-cols-1 gap-4">
              {selected.map((player) => (
                 <div key={player.id}>
                   <div className="flex justify-between items-center border-2 py-6 px-6 rounded-lg">
                       <div className="flex justify-start items-center gap-4">
                         <img  className="w-10 h-10 rounded-full" src={player.player_img} alt="" />
                        <div>
                              <h3 className="font-bold text-lg text-start" >{player.player_name}</h3>
                              <p className="text-gray-400" >{player.player_hand}</p>
                        </div>
                       </div>
                     <button
                       onClick={() => handleDelete(player.id)}
                       className="text-orange-300"
                       ><MdDeleteForever></MdDeleteForever></button>
                  </div>
                    
                 </div>
                 
      ))}
            </div>
      );
};

export default Selected;

