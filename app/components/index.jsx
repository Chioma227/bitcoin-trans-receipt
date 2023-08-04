"use client"
import React from "react";
import Image from "next/image";
import {useState, useEffect} from "react"
import success from "../img/success-save-removebg-preview.png";

const Index = () => {
    const [date,setDate] = useState()
    useEffect(()=>{
        let date = new Date().toDateString()
        setDate(date)
    },[])
    
  return (
    <>
      <main className="flex items-center justify-center flex-col mt-[40px] ">
        <div className="w-screen">
          <section className="flex items-center justify-center flex-col">
            <div>
              <Image src={success} alt="success" width={170} height={170} />
            </div>
            <p className="text-[#4EE56E] font-extrabold text-3xl uppercase">
              sent
            </p>
            <div className="mt-[50px] text-center">
              <p className=" font-semibold">2000 BTC</p>
              <p className="text-[12px] text-gray-500 mt-[4px]">
                The receipient can check balance in the funding wallet.
              </p>
            </div>
            <div className=" bg-gray-100 w-full mt-[45px] px-2 py-3">
              <div className="flex items-center justify-between mb-[20px]">
                <p className="text-gray-500">To: </p>
                <p className="text-[14px]">1Fa82itByi8cnoQaF63ofupWscAUpGreSH</p>
              </div>
              <div className="flex items-center justify-between mb-[20px]">
                <p className="text-gray-500">Payment Method: </p>
                <p className="text-[14px]">Funding Wallet</p>
              </div>
              <div className="flex items-center justify-between mb-[20px]">
                <p className="text-gray-500">Date: </p>
                <p className="text-[14px]">{date}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
