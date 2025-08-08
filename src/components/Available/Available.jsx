
import Players from "../Players/Players";
import Selected from "../Selected/Selected";

const Available = ({handleIsActiveStatus, isActive,handleSelectedPlayers,selected,handleDelete,isActive2}) =>{


      return (
            <div>
                
                   <div className="flex justify-between items-center pb-2 w-11/12 mx-auto pt-4">
                        <h2 className='text-2xl font-bold'>{isActive.players ? "Available Players" : `Selected Players ${selected.length}/9`}</h2>
                  <div className="flex justify-center items-center"> 
                  <button className={`${isActive.players ? "p-2 text-xl border-2 rounded-l-lg bg-[#E7FE29]" : "p-2 text-xl border-2 rounded-l-lg"}`} onClick={() =>handleIsActiveStatus("players")}>Available</button>
                   <button className={`${isActive.players ? "p-2 text-xl border-2 rounded-r-lg" : "p-2 text-xl border-2 rounded-r-lg  bg-[#E7FE29]"}`} onClick={() =>handleIsActiveStatus("selected")}>Selected {selected.length}</button>
                   </div>
                   </div>
                  

                   {
                  isActive.players ? <Players isActive2={isActive2} isActive={isActive} handleSelectedPlayers={handleSelectedPlayers}></Players> :
                   <Selected handleDelete={handleDelete} selected={selected}></Selected>
                 }
                 
            </div>
      );
};

export default Available;