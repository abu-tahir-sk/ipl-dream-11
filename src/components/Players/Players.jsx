import { useEffect, useState } from "react";

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
                   <h2 className='text-2xl font-bold'>Available Players:{players.length}</h2>
                  <div className="flex justify-center gap-6"> 
                  <button className="p-2 text-xl border-2 rounded-lg bg-[#E7FE29]">Available</button>
                   <button className="p-2 text-xl border-2 rounded-lg">Selected (0)</button>
                   </div>
                 </div>
            </main>
      );
};

export default Players;