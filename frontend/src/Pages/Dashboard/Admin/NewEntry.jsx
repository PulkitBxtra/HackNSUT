import React from 'react'
import { Link } from 'react-router-dom'
import {  useEffect } from "react";
import { ethers } from "ethers";
import { useState } from 'react';
import { id } from 'ethers/lib/utils';
import keys from '../../../key';


function NewEntry() {


    const [Aadhar,setAadhar] = useState("");
    const [HeartRate,setHeartRate] = useState("");
    const [BloodPressure,setBloodPressure] = useState("");
    const [InsId,setInsId] = useState("");
    const [WalletId,setWalletId] = useState("");
    const [Details,setDetails] = useState("");
    const [Prescription,setPrescription] = useState("");
    const [Note,setNote] = useState("");
    const [Refferal,setRefferal] = useState("");
    const [DocId,setDocId] = useState("");

    
    const handleSubmit = async (e) =>{ 
      e.preventDefault();
      console.log(Aadhar,HeartRate,BloodPressure,WalletId,InsId,Details,Prescription,Note,Refferal,DocId);

    var abi = keys[0];
    var address = keys[1];
    const { ethereum } = window;
    let obj = {
      Aadhar,
      InsId,
      BloodPressure,
      HeartRate,
      WalletId,
      Details,
      Prescription,
      Note,
      Refferal,
      DocId
    }
    var str = JSON.stringify(obj);
    console.log(str);
    var public_key=obj.WalletId;
    console.log(public_key);

    // console.log(window.ethereum);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    console.log(contract);
    // await contract.pushRecord("0x24ED65507c66f953601956619Df5edA46d3e9A5f", str).then(function (data){
    //   // d = data;
    //   console.log(data);
    // });
    await contract.pushRecord(public_key,str).then(function (data){
      // d = data;
      console.log(data);
    });
    // await contract.("0x24ED65507c66f953601956619Df5edA46d3e9A5f", "he", "h", "sjh").then(function (data){
    //   d = data;
    //   console.log(d);
    // });
    // await contract.getRecordsAdmin("0x24ED65507c66f953601956619Df5edA46d3e9A5f").then(function (data){
    //   d = data;
    //   console.log(d);
    // });
    // var modifiedFileList=d.map((fileHash)=>fileHash);
    // console.log(modifiedFileList);
    }
    //getPendingAccessRequest -> acces ind 1;

      useEffect(()=>{
        async function initWeb3() {
            if (window.ethereum && window.ethereum.isMetaMask) {
                window.ethereum
                  .request({ method: "eth_requestAccounts" })
                  .then((result) => {
                    // alert("Wallet Connected");
                    console.log("wallet connected");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                console.log("Need to install MetaMask");
            }
            
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
          <Link to="/dashboard/admin/searchentry" className="p-4 text-white hover:bg-gray-700">
            View Entries
          </Link>
          <Link to="/dashboard/admin/newentry" className="p-4 text-white hover:bg-gray-700">
            Search Entry
          </Link>
          <Link to="/dashboard/admin/requestaccess" className="p-4 text-white hover:bg-gray-700">
            Request Access
          </Link>
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300 min-h-max">
        
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="w-1/3 mx-auto">
    {/* <p class="lg:w-1/2 mx-auto leading-relaxed text-base">Contact</p> */}
      <div class="flex flex-wrap -m-2">


        
    <form action="" onSubmit={handleSubmit}>

        

        <div class=" mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Aadhar" class="leading-7 text-sm text-gray-600">Aadhar Number</label>
            <input type="text" id="aadhar" name="aadhar" value={Aadhar} onChange={(e)=>{setAadhar(e.target.value);}} placeholder=""class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Wallet" class="leading-7 text-sm text-gray-600">Wallet address</label>
            <input type="text" id="Wallet" name="Wallet" value={WalletId} onChange={(e)=>{setWalletId(e.target.value);}} class="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      </div>


      <div class=" mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="BloodPressure" class="leading-7 text-sm text-gray-600">Blood Pres</label>
            <input type="BloodPressure" id="Blodd" name="insurance"  value={BloodPressure} onChange={(e)=>{setBloodPressure(e.target.value);}}class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Insurance" class="leading-7 text-sm text-gray-600">Heart Rate</label>
            <input type="text" id="HeartRate" name="HeartRate" value={HeartRate} onChange={(e)=>{setHeartRate(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      </div>


      <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Details</label>
            <textarea id="Details" name="Details" value={Details} onChange={(e)=>{setDetails(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="Pressciption" class="leading-7 text-sm text-gray-600">Presciption</label>
            <textarea id="Prescription" name="Presciption" value={Prescription} onChange={(e)=>{setPrescription(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>


      <div class=" mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Note" class="leading-7 text-sm text-gray-600">Note</label>
            <input type="Note" id="Note" name="Note"  value={Note} onChange={(e)=>{setNote(e.target.value);}}class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Refferal" class="leading-7 text-sm text-gray-600">Refferal</label>
            <input type="text" id="Refferal" name="Refferal" value={Refferal} onChange={(e)=>{setRefferal(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      </div>


      <div class=" mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Insurance" class="leading-7 text-sm text-gray-600">Insurance Id</label>
            <input type="text" id="Insurance" name="Insurance"  value={InsId} onChange={(e)=>{setInsId(e.target.value);}}class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="Doctor" class="leading-7 text-sm text-gray-600">Doctor Id</label>
            <input type="text" id="Doctor" name="Doctor" value={DocId} onChange={(e)=>{setDocId(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      </div>

      
        

        
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
        </div>

        </form>

        


        
          
        
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