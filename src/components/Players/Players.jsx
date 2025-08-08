import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = ({handleSelectedPlayers,isActive2}) => {
      
      const [players, setPlayers] = useState([]);
 
      useEffect( () =>{
            fetch('payer.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

      },[]);

    
      return (
            <main className="w-11/12 mx-auto py-6">        
                                
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md border-2 p-0 md:p-4 rounded-2xl">
                   {
                        players.map(player => <Player
                        isActive2={isActive2}
                        handleSelectedPlayers={handleSelectedPlayers}
                               key={player.id} 
                        player={player}>
                   </Player>)
                  }
                 </div>
               
            </main>
      );
};

export default Players;