import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Card from './Card';

function SearchEntry() {

  const [Id,setId] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(Id);
  }

  const va = [1,2,3];

  var maping= va.map( x =>{
    return <Card
    id={x[0]}
    aadhar={x[1]}
    time = {x[2]}
    // id="69"
    // key="12"
      >
      </Card>;
  })

  return (
    <div>

    <div className="grid grid-cols-4 h-screen">
      <aside className="col-span-1 bg-gray-800">
        <nav className="flex flex-col h-full text-gray-600 body-font">
          <Link to="/dashboard/admin/newentry" className="p-4 text-white hover:bg-gray-700">
            Make Entry
          </Link>
          <Link to="/dashboard/admin/viewentry" className="p-4 text-white hover:bg-gray-700">
            View Entries
          </Link>
          <Link to="/dashboard/admin/searchentry" className="p-4 text-white hover:bg-gray-700">
            Search Entry
          </Link>
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300">
        

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          
          <form onSubmit={handleSubmit} class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">Aadhar Number</label>
              <input type="text" id="full-name" name="full-name"value={Id} onChange={(e)=>{setId(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 focus:bg-transparent focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            
            <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Search</button>
          </form>

        </div>
      <h1 class="w-2/3 py-10 mx-auto text-xl text-black">Results</h1>

      </section>

            
      <section class="text-gray-600 body-font">
      <Card></Card>

      </section>


      </main>
    </div>

    </div>

  )
}

export default SearchEntry