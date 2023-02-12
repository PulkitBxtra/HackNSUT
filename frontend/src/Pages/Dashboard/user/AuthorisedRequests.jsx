import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import keys from '../../../key';


function Card(props) {
  console.log(props);
  const [open, setOpen] = useState(true);
  const [randomData,setRandomData] = useState("");

  async function foo(){

    var address = keys[1];
    var abi = keys[0];
    const { ethereum } = window;
    let obj = {
    }
    var str = JSON.stringify(obj);
    console.log(str);
    var public_key=obj.WalletId;
    console.log(public_key);

    // console.log(window.ethereum);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    await contract.pushRecord("0x24ED65507c66f953601956619Df5edA46d3e9A5f",str);
  }

return (
  <div>
  <section class="text-gray-600 body-font">
  
<div class="container px-5 py-5 mx-auto  ">
  <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
    <h1 class="w-2/3 flex-grow sm:pr-16 text-l font-medium title-font text-gray-900">id: {props.id}
    <br />
      <br />
    </h1>
    <button  onClick={() => {foo()}} class="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0">Accept</button>
  </div>
</div>

  <div class={open ? "hidden": "flex w-2/3 items-center mx-auto bg-gray-100 rounded"}>
  </div>

  <hr class="h-px my-8 bg-emerald-500 border-0 dark:bg-emerald-500"></hr>

</section>
  </div>
)
}


function AuthorisedRequests() {
  return (
    <div>
        <div className="grid grid-cols-4 min-h-screen">
      <aside className="col-span-1 bg-gray-800">
        <nav className="flex flex-col h-full text-gray-600 body-font">
          <Link to="/dashboard/user/logs" className="p-4 text-white hover:bg-gray-700">
            My Medical Records
          </Link>
          <Link to="/dashboard/user/pending" className="p-4 text-white hover:bg-gray-700">
            Pending Requests
          </Link>
          <Link to="/dashboard/user/authorised" className="p-4 text-white hover:bg-gray-700">
            Authorised Requests
          </Link>
          
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300 min-h-max">
      <Card id="0x0A1037CDBe95b3397C0BD438041AbB1dA83eC567"></Card>
      <Card id="0x45f3368251A559411b995182f23c1B4A9Fe10c5B"></Card>
      <Card id="0x2EA6Ef6477a3e0D3f261dc57459515842277e216"></Card>
            

      </main>
    </div>


    </div>
    
  )
}

export default AuthorisedRequests