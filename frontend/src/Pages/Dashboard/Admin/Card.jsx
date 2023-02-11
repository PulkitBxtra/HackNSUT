import React from 'react'
import { useState } from 'react';

function Card(props) {
    console.log(props);
    const [open, setOpen] = useState(true);

  return (
    <div>
    <section class="text-gray-600 body-font">
    
  <div class="container px-5 py-5 mx-auto  ">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-l font-medium title-font text-gray-900">id: {props.id}
      <br />
        Date: {props.time}
        <br />
        Time:{}
      </h1>
      <button  onClick={() => setOpen(!open)} class="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0">View</button>
    </div>
    {/* <hr class="divide-emerald-500"/> */}
  </div>

    <div class={open ? "hidden": "flex mx-20 bg-gray-100 rounded"}>
    {/* <div onClick={() => setOpen(!open)} class="display-hidden"> */}
        <p>
	"random": "52",
	"random float": "41.74",
	"bool": "false",
	"date": "1991-08-27",
	"regEx": "hellooooooooooooooooooo world",
	"enum": "json",
	"firstname": "Trixi",
	"lastname": "Ariella",
	"city": "Austin",
	"country": "Liberia",
	"countryCode": "LK",
	"email uses current data": "Trixi.Ariella@gmail.com",
	"email from expression": "Trixi.Ariella@yopmail.com",
	"array": [
		"Peri",
		"Hope",
		"Doralynne",
		"Neila",
		"Corly"
	],
    </p>
    </div>

    <hr class="h-px my-8 bg-emerald-500 border-0 dark:bg-emerald-500"></hr>

</section>
        {/* {props.id}
        
        {props.aadhar}
        
        {props.time} */}

    </div>
  )
}

export default Card