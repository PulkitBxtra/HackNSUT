import React from 'react'
import { Link } from 'react-router-dom'
import {  useEffect } from "react";
import { ethers } from "ethers";
import { useState } from 'react';
import Card from './Card';
import keys from '../../../key';

function ViewEntry() {

    const [val,setVal] = useState([]);
    
    useEffect(()=>{
        async function initWeb3() {
            if (window.ethereum && window.ethereum.isMetaMask) {
                window.ethereum
                  .request({ method: "eth_requestAccounts" })
                  .then((result) => {
                    console.log("Wallet Connected");


                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                console.log("Need to install MetaMask");
            }
            
            var abi  = keys[0];
            var address = keys[1];
            const { ethereum } = window;
            // console.log(window.ethereum);
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(address, abi, signer);
            // console.log(contract);
            // console.log(signer);
            await contract.getAllPatients().then(function(value){
              console.log(value);
            //   SetVal(Val);
            let list = [];
              const valmap= value.map(x =>{
                console.log(x[0])
                list.push(
                   <div>
                        {value[0]['aadhar']}
                   </div>
                )

                return <Card
                    id={x[0]}
                    aadhar={x[1]}
                    time = {x[2]}
                    // id="69"
                    // key="12"
                >
                </Card>;
                // return x;
              })
            //   console.log(list)
              setVal(
                <>
                    {valmap}
                </>
              );

            //   console.log(valmap);
            // valmap();
            })
          }
        initWeb3();
      },[])


  return (
    <div>
         <div className="grid grid-cols-4 min-h-screen">
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
      <main className="col-span-3 bg-gray-300 min-h-max ">
        {/* Add your main content here */}

        {val}

        {/* <Card
        id="69"
        ></Card> */}
            

      </main>
    </div>

    </div>
  )
}

export default ViewEntry