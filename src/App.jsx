import { useState } from "react"
import Header from "./components/Header/Header"
import Available from "./components/Available/Available";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Subscrib from "./components/Subscrib/Subscrib";
import Footer from "./components/Footer/Footer";



function App() {

  const [isActive, setIsActive] = useState({
    players: true,
    status: "players"
  });
  const [coins, setCoins] = useState(0);

  const handleChoosePlayerPrice = (pr) => {
   if(coins >= pr ){
     setCoins(coins - pr)
     toast.success("Congrates !! Kieron Pullard is now in your squad", {
      position: "top-center",
      autoClose: 500
     });
   }
   else{
      toast.warn("Pleas coin added", {
        position: "top-center",
        autoClose: 1000
      });
   }
  }
  
  const [isActive2, setIsActive2] = useState(false);
  
  const handleAddMoney = () => {
          setCoins(coins + 600000)
              setIsActive2(true);
              setTimeout(() => setIsActive2(false), 500);
              toast.success("Coins added successful", {
      position: "top-center",
     });
  }
  
  const [selected, setSelected] = useState([]);
  
  const handleDeleteCoins = (id) => {
    const player = selected.find((p) => p.id == id);
    
       setCoins(coins + player.price)
      toast.warn("Selected Player deleted", {
      position: "top-right",
      autoClose: 500
     });
   
  }

  const handleDelete = (id) => {
    handleDeleteCoins(id)
    const reminigPlayer = selected.filter((player) => player.id !== id);
    setSelected(reminigPlayer);
  }

  const [activePlayerId, setActivePlayerId] = useState(null);


  const handleSelectedPlayers = (player) => {
    const isExist = selected.find((p) => p.id == player.id);
    if(isExist){
      toast.warn("Already selected players", {
      position: "top-right",
      autoClose: 500
     });
    }
    else{
      setActivePlayerId(player.id);
      handleChoosePlayerPrice(player.price);

      setTimeout(() => setActivePlayerId(null),500)

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
     <Header   coins={coins} isActive2={isActive2} handleAddMoney={handleAddMoney}></Header>
      <Available toast={toast} coins={coins} activePlayerId={activePlayerId} handleDelete={handleDelete} selected={selected} handleSelectedPlayers={handleSelectedPlayers} isActive={isActive} handleIsActiveStatus={handleIsActiveStatus}></Available>
      <Subscrib></Subscrib>
      <Footer></Footer>
       <ToastContainer></ToastContainer> 

    </>
  )
}

export default App
