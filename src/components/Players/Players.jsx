import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
      const [players, setPlayers] = useState([]);
 
      useEffect( () =>{
            fetch('payer.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

      },[])

      return (
            <main className="w-11/12 mx-auto py-6">
                 <div className="flex justify-between items-center pb-8">
                   <h2 className='text-2xl font-bold'>Available Players</h2>
                  <div className="flex justify-center gap-6"> 
                  <button className="p-2 text-xl border-2 rounded-lg bg-[#E7FE29]">Available</button>
                   <button className="p-2 text-xl border-2 rounded-lg">Selected (0)</button>
                   </div>
                 </div>
                
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md border-2 p-0 md:p-4 rounded-2xl">
                   {
                        players.map(player => <Player
                               key={player.id} 
                        player={player}>
                   </Player>)
                  }
                 </div>
               
            </main>
      );
};

export default Players;