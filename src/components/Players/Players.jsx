import { useEffect, useState } from "react";
import Player from "../Player/Player";



const Players = ({handleSelectedPlayers,activePlayerId,coins,toast}) => {
      
      const [players, setPlayers] = useState([]);
 
      useEffect( () =>{
            fetch('payer.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

      },[]);

    
      return (
            <main className="w-11/12 mx-auto py-6">        
                                
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {
                        players.map(player => <Player 
                              coins={coins}
                              toast={toast} 
                              activePlayerId={activePlayerId}                    
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