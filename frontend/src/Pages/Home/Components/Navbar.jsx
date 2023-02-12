import React from 'react'
import { useState } from 'react';

function Navbar() {
  const [account,setAccount] = useState(null);
  const [Login, setLog] = useState(false);

 
  // chn

  const handleClick = () =>{
    window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then(async (result) => {
      setAccount(result[0]);
      // var abi = keys[0];
      // var address = keys[1];
      // const { ethereum } = window;
      // const provider = new ethers.providers.Web3Provider(ethereum);
      // const signer = await provider.getSigner();
      // const contract = await new ethers.Contract(address, abi, signer);
      // await contract.isRegisteredUser().call().then(function (data){
      //   console.log(data);
      //   if (data[0]==='n'){
      //     alert("Make an account.");
      //   }
      //   else{
      //     Navigate('/dashboard/admin');
      //   }
      // })
      
      
      console.log(Login);
      console.log("Wallet Connected");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // if(account!=null){
  //   navigate('/dashboard/admin');
  // }

  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="  container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
     
    <img
              class="w-auto h-16 mt-2"
              src="https://i.imgur.com/FZCkcN0.png"
              alt="asme logo"
            />
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900 cursor-pointer" href='/'>Home</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer" href="/about" >About us</a>
      {/* <a class="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a> */}
      <a class="mr-5 hover:text-gray-900 cursor-pointer" href="/experiences">Experiences</a>
    </nav>

    <button onClick={handleClick} class=" text-gray-700 inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0">
      <a href="/dashboard/admin"> Login </a>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar