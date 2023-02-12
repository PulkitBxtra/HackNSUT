import React from 'react'
import { useState } from 'react';

function Card(props) {
    console.log(props);
    const [open, setOpen] = useState(true);
    const [randomData,setRandomData] = useState("");

    function foo(){
     let x =  Math.floor((Math.random() * 10) + 1);
     let  name = ["Rishabh","Pulkit","Vinay","Mini","Ram","Shyam","Ghanshyam","Sujata","Keshav","Sakshi"][x];
     let age = Math.floor((Math.random() * 100) + 1);
     let bloodGroup = ["A+","A-","B+","B-","AB+","AB-","O+","O-"][Math.floor((Math.random() * 8))]
     let aadhar_number =  Math.floor((Math.random() * 1000000000000) + 1);
     var obj = {
      name,
      age,
      bloodGroup,
      aadhar_number,
     }
     setRandomData(obj);
    }

  return (
    <div>
    <section class="text-gray-600 body-font">
    
  <div class="container px-5 py-5 mx-auto  ">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="w-2/3 flex-grow sm:pr-16 text-l font-medium title-font text-gray-900">id: {props.id}
      <br />
        Date: {props.time}
        <br />
        Time:{}
      </h1>
      <button  onClick={() => {setOpen(!open);foo()}} class="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0">View</button>
    </div>
    {/* <hr class="divide-emerald-500"/> */}
  </div>

    <div class={open ? "hidden": "flex w-2/3 items-center mx-auto bg-gray-100 rounded"}>
    {/* <div onClick={() => setOpen(!open)} class="display-hidden"> */}
        <p>
          {JSON.stringify(randomData)}
    </p>
    </div>

    <hr class="h-px my-8 bg-emerald-500 border-0 dark:bg-emerald-500"></hr>

</section>
    </div>
  )
}

export default Card