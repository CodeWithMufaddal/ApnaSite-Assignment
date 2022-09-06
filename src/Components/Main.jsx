import React, { useState } from 'react'
import { useData } from '../Context/DataProvider'

const Main = () => {
   const { data, setData, handleOnSubmit } = useData()
   const { invoiceNo , Date} = data

   const handleOnChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })

   }



   return (
      <div className="my-3 container ">
         <main className=" border ">
            <div className="   d-flex flex-column  border-bottom">
               <div className=" d-flex align-items-center" >
                  <label htmlFor="exampleInputEmail1" className=" ws-nowrap mx-2">Invoice ID:</label>
                  <div className=" fw-bold fs-6">
                     {invoiceNo}
                  </div>
               </div>
               <div className=" d-flex align-items-center">
                  <label htmlFor="exampleInputEmail1" className=" ws-nowrap mx-2">Date:</label>
                  <div className="">
                     {Date}
                  </div>
               </div>
            </div>

            <form className="d-flex" onSubmit={handleOnSubmit}>
               <div className="m-2 d-flex align-items-center" >
                  <label htmlFor="exampleInputEmail1" className="form-label ws-nowrap mx-2">Party Name:</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>

               <div className="m-2 d-flex align-items-center">
                  <label htmlFor="exampleInputPassword1" className="form-label ws-nowrap mx-2">Mobile Number:</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
               </div>

               <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         </main>
      </div>
   )
}

export default Main