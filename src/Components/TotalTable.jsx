import React from 'react'
import numberToWords from 'number-to-words'
import { useData } from '../Context/DataProvider'


const TotalTable = () => {

   const { totalAmount } = useData()
   let roundNum = Math.round(totalAmount.TotalAmount + ((18 / 100) * totalAmount.TotalAmount))
   let tax = ((9 / 100) * totalAmount.TotalAmount).toFixed(2)

   return (<>

      <tr className="bg-white  text-center" style={{ margin: '10px' }}>
         <td className="col-1 border-0 border-end "></td>
         <td className="col-8 border-0"></td>
         <th colSpan="2" scope="row" className="col-1 border" >SGST</th>
         <td className="col-1 border">{18 / 2}% </td>
         <td className=" col-1 border" value={tax}>{tax}</td>
      </tr>
      <tr className="bg-white  text-center ">
         <td className="col-1 border-0 border-end "></td>
         <td className="col-8 border-0"></td>
         <th colSpan="2" scope="row" className="col-1 border" >CGST</th>
         <td className="col-1 border">{18 / 2}% </td>
         <td className=" col-1 border" value={tax}>{tax}</td>
      </tr>
      <tr className="bg-white  text-center ">
         <td className="col-1 border-0 border-end "></td>
         <td className="col-8 border-0"></td>
         <th colSpan="2" scope="row" className="col-1 border" >Rounding Off</th>
         <td className="col-1 border">0.00%</td>
         <td className="col-1 border">{((roundNum) - (totalAmount.TotalAmount + ((18 / 100) * totalAmount.TotalAmount))).toFixed(2)}</td>
      </tr>
      <tr className="bg-white  text-center ">
         <td colSpan='4' className=" border-top text-start ps-5"> {(numberToWords.toWords((roundNum).toFixed(2))).toUpperCase()}</td>
         <td colSpan='2' className="    border-top border-bottom   fw-bold  ">
            <span className="pe-4">{(roundNum).toFixed(2)}</span>
         </td>
      </tr>

   </>
   )
}

export default TotalTable