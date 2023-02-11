import React from 'react'
import { Link } from 'react-router-dom'


function NewEntry() {
  return (
    <div>

         <div className="grid grid-cols-4 h-screen">
      <aside className="col-span-1 bg-gray-800">
        <nav className="flex flex-col h-full text-gray-600 body-font">
          <Link to="/dashboard/admin/newentry" className="p-4 text-white hover:bg-gray-700">
            Make Entry
          </Link>
          <Link to="/about" className="p-4 text-white hover:bg-gray-700">
            View Entries
          </Link>
          <Link to="/contact" className="p-4 text-white hover:bg-gray-700">
            
          </Link>
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300">
        
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
    {/* <p class="lg:w-1/2 mx-auto leading-relaxed text-base">Contact</p> */}
      <div class="flex flex-wrap -m-2">


        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="DOB" class="leading-7 text-sm text-gray-600">Date Of Birth (DDMMYYYY)</label>
            <input type="text" id="DOB" name="DOB" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="Aadhar" class="leading-7 text-sm text-gray-600">Aadhar Number</label>
            <input type="text" id="aadhar" name="aadhar" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="Gender" class="leading-7 text-sm text-gray-600">Gender</label>
            <input type="text" id="Gender" name="gender" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>


        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="Insurance" class="leading-7 text-sm text-gray-600">Insurance number</label>
            <input type="Insurance" id="insurance" name="insurance" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>



        
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>


        


        
          
        
      </div>
    </div>
  </div>
</section>

            

      </main>
    </div>


       
    </div>
  )
}

export default NewEntry