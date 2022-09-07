import React from 'react'
import { useData } from '../Context/DataProvider'
import Perticulars from './Particulars'
import TotalTable from './TotalTable'

const ProductTable = () => {
   const { data, totalAmount } = useData()
   const { Particulars } = data

   return (
      <div className="container">
         <div className="d-flex row ">
            <table className="table mb-0 ">
               <thead>
                  <tr className="text-center">
                     <th scope="col" className="col-1 ws-nowrap  border-end" >Sr</th>
                     <th scope="col" className="col-8 ws-nowrap text-start" >Perticulars</th>
                     <th scope="col" className="col-1  ws-nowrap border-start"  >QTY</th>
                     <th scope="col" className="col-1  ws-nowrap border-start"  >Unit</th>
                     <th scope="col" className="col-1  ws-nowrap border-start"  >Price/Unit</th>
                     <th scope="col" className="col-1  ws-nowrap border-start"  >Amount</th>
                  </tr>
               </thead>

               <tbody className="">
                  {Particulars.length > 0 ? Particulars.map((product, i) => {
                     let { Name, QTY, Unit, Price } = product
                     return (
                        <tr key={i} className="bg-white  text-center " >
                           <th scope="row" className="col-1 bg-white  border-0 border-end" >{i + 1}</th>
                           <td className="col-8 pt-0 text-start fw-bold  border-0"><span className="mx-3" >{Name}</span></td>
                           <td className="col-1   border-start border-0" >{(QTY * 1).toFixed(2)}</td>
                           <td className="col-1   border-start border-0" >{Unit}</td>
                           <td className="col-1   border-start border-0"  >{(Price * 1).toFixed(2)}</td>
                           <td className="col-1   border-start border-0" >{(QTY * Price).toFixed(2)}</td>
                        </tr>
                     )
                  })
                     : <tr className="bg-white  text-center " >
                        <th scope="row" className="col-1 bg-white  border-0 border-end" ></th>
                        <td className="col-8 pt-0 text-start fw-bold  border-0"><span className="mx-3" ></span></td>
                        <td className="col-1   border-start border-0" ></td>
                        <td className="col-1   border-start border-0" ></td>
                        <td className="col-1   border-start border-0"  ></td>
                        <td className="col-1   border-start border-0" ></td>
                     </tr>
                  }

                  <tr className="text-center">
                     <th scope="row" className="col-1 bg-white  border " ></th>
                     <td className=" col-8 border"></td>
                     <td className=" col-1 border fw-bold" >{(totalAmount.TotalQTY * 1).toFixed(2)}</td>
                     <td className=" col-1 border fw-bold"></td>
                     <td className=" col-1 border fw-bold"></td>
                     <td className=" col-1 border fw-bold " value={totalAmount.TotalAmount.toFixed(2)}>{totalAmount.TotalAmount.toFixed(2)}</td>
                  </tr>

                  <TotalTable />

                  <tr className="bg-white  text-center ">
                     <td colSpan="6" className="col-8 pt-0  border-0">
                        <div className="">

                           <Perticulars />
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default ProductTable