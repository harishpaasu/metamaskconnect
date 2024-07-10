import React from 'react';
import { useEffect, useState} from 'react';
import {ethers} from "ethers";


function App(){
const [WalletStatus, connectWallet]= useState("connect");
const[Address, setAddress]= useState("")
const [Balance, updateBalance]=useState("")

const handleClick =async() =>{
  if(!window.ethereum){
    alert("Download metamask")
  }
else{
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const Address =  await provider.send("eth_requestAccounts",[]);
  setAddress(Address);
  const Balance =await provider.getBalance(Address[0]);
    updateBalance(`${ethers.utils.formatEther(Balance.toString())}Eth`);
    connectWallet('wallet connected');
  
  
}
}
  return (
    <div className="App">
      <button onClick={handleClick}>{WalletStatus}</button>
      <h1>Address:{Address}</h1>
      <h2>Account Balance:{Balance}</h2>
    </div>
  )
}

export default App