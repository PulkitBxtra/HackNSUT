import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import keys from '../../../key';
import { ethers } from "ethers";


function Card(props) {
  console.log(props);
  const [open, setOpen] = useState(true);
  const [randomData,setRandomData] = useState("");

    function getRandomDate() {
      const maxDate = Date.now();
      const timestamp = Math.floor(Math.random() * maxDate);
      return new Date(timestamp);
  }

  function foo(){
   let x =  Math.floor((Math.random() * 10) + 1);
  //  let  name = ["Rishabh","Pulkit","Vinay","Mini","Ram","Shyam","Ghanshyam","Sujata","Keshav","Sakshi"][x];
  //  let age = Math.floor((Math.random() * 100) + 1);
  //  let bloodGroup = ["A+","A-","B+","B-","AB+","AB-","O+","O-"][Math.floor((Math.random() * 8))]
  //  let aadhar_number =  Math.floor((Math.random() * 1000000000000) + 1);
   let disease = ["Diarrhoea","Maleria","Fever","Jaundice","Fungal Disease","Back pain"][Math.floor((Math.random() * 6))]
   let amount_paid =  Math.floor((Math.random() * 100) + 100);
    let date = getRandomDate();
   var obj = {
    disease,
    amount_paid,
    date
   }
   setRandomData(obj);
  }

return (
  <div>
  <section class="text-gray-600 body-font">
  
<div class="container px-5 py-5 mx-auto  ">
  <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
    <h1 class="w-2/3 flex-grow sm:pr-16 text-l font-medium title-font text-gray-900">
    <br />
    ID : {props.id}<br></br>
    Name : Rishabh
      <br />
      Aadhar id : 927826482728742
    </h1>
    <button  onClick={() => {setOpen(!open);foo()}} class="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0">View</button>
  </div>
  {/* <hr class="divide-emerald-500"/> */}
</div>

  <div class={open ? "hidden": "flex w-2/3 items-center mx-auto bg-gray-100 rounded"}>
  {/* <div onClick={() => setOpen(!open)} class="display-hidden"> */}
      <p>
        <p>Disease : {JSON.stringify(randomData.disease)}</p>
        <p>Amount : {JSON.stringify(randomData.amount_paid)}</p>
        <p>Date : {JSON.stringify(randomData.date)}</p>

    </p>
  </div>

  <hr class="h-px my-8 bg-emerald-500 border-0 dark:bg-emerald-500"></hr>

</section>
  </div>
)
}

function UserLogs() {
  useState(async ()=>{
    var abi  = keys[0];
    var address = keys[1];
      const { ethereum } = window;
      // console.log(window.ethereum);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(address, abi, signer);
      await contract.getRecordsUser().then(function(data){
        console.log(data);
      })

  },[])

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
        {/* Add your main content here */}

            <Card id="2136270783663461"></Card>
            <Card id="7078366346121362"></Card>
            <Card id="1213627078362136"></Card>
            <Card id="7078362823647113"></Card>

      </main>
    </div>


    </div>

  )
}

export default UserLogs