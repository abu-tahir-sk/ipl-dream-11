import { useState } from "react"
import Header from "./components/Header/Header"
import Available from "./components/Available/Available";




function App() {

  const [isActive, setIsActive] = useState({
    players: true,
    status: "players"
  });
  const [coins, setCoins] = useState(0);

  const handleChoosePlayerPrice = (pr) => {
   if(coins > pr ){
     setCoins(coins - pr)
   }
   else{
    alert('alert')
   }
  }
  

        const [isActive2, setIsActive2] = useState(false);
  
        const handleAddMoney = () => {
              setCoins(coins + 600000)
              setIsActive2(true);
              setTimeout(() => setIsActive2(false), 500);
              
        }
  
  const [selected, setSelected] = useState([]);
  
  const handleDeleteCoins = (id) => {
    const player = selected.find((p) => p.id == id);
    
      
       setCoins(coins-player.price)

   
  }

  const handleDelete = (id) => {
    handleDeleteCoins(id)
    const reminigPlayer = selected.filter((player) => player.id !== id);
    setSelected(reminigPlayer);
  }

  const handleSelectedPlayers = (player) => {
    const isExist = selected.find((p) => p.id == player.id);
    if(isExist){
      alert('na');
    }
    else{
      handleChoosePlayerPrice(player.price);

      setIsActive2(player.id);
    setTimeout(() => setIsActive2(false), 500);
       const newPlayers = [...selected, player];
       
    setSelected(newPlayers);
    
    }
  };


  const handleIsActiveStatus = (status) => {
    if(status == "players"){
      setIsActive({
        players: true,
    status: "players"
      })
    }
    else{
      setIsActive({
        players: false,
    status: "selected"
      })
       
    }
  };
  
  return (
    <>
     <Header coins={coins} isActive2={isActive2} handleAddMoney={handleAddMoney}></Header>
      <Available isActive2={isActive2} handleDelete={handleDelete} selected={selected} handleSelectedPlayers={handleSelectedPlayers} isActive={isActive} handleIsActiveStatus={handleIsActiveStatus}></Available>
          
    </>
  )
}

export default App
