import React from 'react'
import { useData } from '../Context/DataProvider'
import ProductTable from './ProductTable'

const Main = () => {
   const { data, setData, handleOnSubmit } = useData()
   const { invoiceNo, Date, PartyName, Mobile } = data

   const handleOnChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
   }



   return (
      <div className="mt-3 mb-5 container p-0  ">
         <main className=" border ">
            <section className="d-flex flex-column">
               <div className="   d-flex flex-column  border-bottom p-2 my-1">
                  <div className=" d-flex align-items-center my-1 " >
                     <label htmlFor="invoiceId" className=" ws-nowrap mx-2">Invoice ID:</label>
                     <div className=" fw-bold fs-6" name="invoiceId">
                        {invoiceNo}
                     </div>
                  </div>
                  <div className=" d-flex align-items-center my-1 ">
                     <label htmlFor="Date" className=" ws-nowrap mx-2">Date:</label>
                     <div className="">
                        <input type="date" className="p-1 rounded border" name="Date" id="Date" onChange={handleOnChange}
                           value={Date} />
                     </div>
                  </div>
               </div>

               <div className="d-flex flex-column border-bottom ">
                  <div className="m-2 d-flex align-items-center" >
                     <label htmlFor="PartyName" className=" ws-nowrap mx-2 me-4">Party Name :</label>
                     <input type="text" className="form-control w-25  " id="PartyName" name='PartyName' value={PartyName} onChange={handleOnChange} />
                  </div>

                  <div className="m-2 d-flex align-items-center">
                     <label htmlFor="Mobile" className=" ws-nowrap mx-2 ">Mobile Number :</label>
                     <input type="tel" name='Mobile' onChange={handleOnChange} value={Mobile} className="form-control w-25" />
                  </div>
               </div>

               <div className="">
                  <ProductTable />
               </div>

               <div className="d-flex w-25 m-auto my-2 flex-column ">
                  <button type="submit" className="btn btn-primary fs-5" onClick={handleOnSubmit}>Generate</button>
               </div>

            </section>
         </main>
      </div >
   )
}

export default Main