import React from 'react'
import { useData } from '../Context/DataProvider'

const History = () => {

   const { invoices, setInvoices, setProducts, products, addProduct, setData, data } = useData()

   const handleClearAll = () => {
      localStorage.setItem('Bill', [])
      setInvoices([])
      setData({
         invoiceNo: 1,
         Date: new Date().toISOString().slice(0, 10),
         PartyName: '',
         Mobile: '',
         Particulars: [],
      })

   }

   // console.log(invoices)
   return (
      <div>
         <h4 className="text-center m-4" >Invoice History</h4>
         <div className="container  mt-3 mb-5">
            <div className="">



               {invoices.length > 0 ?
                  <div>
                     <div className="w-100 d-flex justify-content-end pe-4 ">
                        <button type="button" className="btn btn-danger" onClick={handleClearAll}>ClearAll</button>
                     </div>
                     {invoices.map((product, i) => {
                        return (
                           <div key={i} className="container my-3">
                              <div className="border rounded shadow-sm  d-flex">
                                 <div className=" bg-light d-flex p-2" >{i + 1}</div>
                                 <div className="bg-white p-2  ">
                                    <div className="">
                                       <label htmlFor="PartyName">Party Name:</label>
                                       <div className="">{product.PartyName}</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div> : <div className="border container"> No Data Available </div>}
            </div>
         </div>
      </div >
   )
}

export default History