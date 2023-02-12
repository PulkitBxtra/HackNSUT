import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ethers } from "ethers";

function RequestAccess() {

  const [Id,setId] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(Id);
    var abi = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "addhar",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "phoneNumber",
            "type": "string"
          }
        ],
        "name": "createAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "adminAddress",
            "type": "address"
          }
        ],
        "name": "giveAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "name": "pushRecord",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "adhar",
            "type": "string"
          }
        ],
        "name": "requestAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "addressToAdmin",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "publicAddress",
                "type": "address"
              }
            ],
            "internalType": "struct Storage.AdminInfo",
            "name": "info",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "addressToPatient",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "aadhar",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "publicAddress",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "phoneNumber",
                "type": "string"
              }
            ],
            "internalType": "struct Storage.PatientInfo",
            "name": "info",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "addressToRecord",
        "outputs": [
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "adharToAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllPatients",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "aadhar",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "publicAddress",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "phoneNumber",
                "type": "string"
              }
            ],
            "internalType": "struct Storage.PatientInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPendingAccessRequest",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "publicAddress",
                "type": "address"
              }
            ],
            "internalType": "struct Storage.AdminInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "addhar",
            "type": "string"
          }
        ],
        "name": "getRecordsAdmin",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "data",
                "type": "string"
              }
            ],
            "internalType": "struct Storage.Record[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getRecordsUser",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "data",
                "type": "string"
              }
            ],
            "internalType": "struct Storage.Record[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isRegisteredUser",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  var address = "0xf8C8c0f5ae382F23b439eB4B1f1a429593cc78D7";
  const { ethereum } = window;
  // console.log(window.ethereum);
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);
  console.log(Id);
  await contract.requestAccess(Id).then(function(data) {
    console.log(data);
  });
  }

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
          <Link to="/dashboard/admin/requestaccess" className="p-4 text-white hover:bg-gray-700">
            Request Access
          </Link>
          
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300">
        {/* Add your main content here */}

        <form onSubmit={handleSubmit} class="my-20 flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">Aadhar Number</label>
              <input type="text" id="full-name" name="full-name"value={Id} onChange={(e)=>{setId(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 focus:bg-transparent focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            
            <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Request</button>
          </form>

            

      </main>
    </div>
    </div>
  )
}

export default RequestAccess
