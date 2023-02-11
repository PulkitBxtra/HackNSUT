import React from 'react'
import { Link } from 'react-router-dom'


function VerticalNavbarAdmin() {
  return (
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
        {/* Add your main content here */}

            

      </main>
    </div>

  )
}

export default VerticalNavbarAdmin