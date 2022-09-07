import React from 'react'
import { useData } from '../Context/DataProvider'

const Perticulars = () => {
   const { data, setData, setProducts, products, setTotalAmount, totalAmount } = useData()
   const { Particulars } = data

   const handleOnChange = (e) => {
      setProducts({ ...products, [e.target.name]: e.target.value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      let val = { ...data }
      let per = val.Particulars
      per.splice(per.length, 0, products)
      val.Particulars = per
      setData(() => val)
      setProducts({
            Name: '',
            Price: 0,
            QTY: 0,
            GST: 18,
            Unit: ''
         })

      Particulars.map(particular => {
         return setTotalAmount({
            ...totalAmount,
            ['TotalQTY']: parseFloat(totalAmount.TotalQTY) + (particular.QTY * 1),
            ['TotalAmount']: totalAmount.TotalAmount + (particular.QTY * particular.Price)
         })
      })
   }

   return (
      <>
         <div className="  d-flex flex-column w-100 bg-white">
            <div className="d-flex">
               <div className=" py-3 d-flex flex-column w-100 ">
                  <div className="d-flex border rounded flex-column   shadow-sm">
                     <header className="d-flex w-100 px-4 py-2 bg-light border-bottom justify-content-between">
                        <div className="">
                           <span>
                              Add Product
                           </span>
                           
                        </div>
                     </header>

                     <main className="d-flex p-2 ">
                        <form className="d-flex flex-column w-100" onSubmit={handleSubmit}>
                           <div className="d-flex   mb-2">
                              <div className="d-flex flex-column w-100 border-end pe-0 pe-lg-4">
                                 <div className="m-2 d-flex align-items-center" >
                                    <label htmlFor="Name" className=" ws-nowrap mx-2 me-4">Name :</label>
                                    <input type="text" className="form-control " onChange={handleOnChange} value={products.Name} id="Name" name="Name" />
                                 </div>

                                 <div className="m-2 d-flex align-items-center">
                                    <label htmlFor="QTY" className=" ws-nowrap mx-2 ">QTY :</label>
                                    <input type="number" className="form-control " onChange={handleOnChange} value={products.QTY} id="QTY" name='QTY' />
                                 </div>

                                 <div className="m-2 d-flex align-items-center">
                                    <label htmlFor="exampleInputPassword1" className=" ws-nowrap mx-2 ">Unit :</label>
                                    <select className="form-select " name="Unit" onChange={handleOnChange} value={products.Unit} >
                                       <option hidden>Select Unit</option>
                                       <option value="Psc">Psc</option>
                                       <option value="Kg">Kg</option>
                                       <option value="gram">gram</option>
                                    </select>
                                 </div>

                                 <div className="m-2 d-flex align-items-center">
                                    <label htmlFor="Price" className=" ws-nowrap mx-2 ">Price :</label>
                                    <input type="number" className="form-control " onChange={handleOnChange} value={products.Price} id="Price" name='Price' placeholder="Per Piece" />
                                 </div>
                              </div>


                              <div className="d-flex flex-column w-100">
                                 <div className="m-2 d-flex align-items-center">
                                    <label htmlFor="GST" className=" ws-nowrap mx-2 ">GST :</label>
                                    <div className="text-start ms-2 d-flex fs-5">18</div>
                                    <span className="fs-5 px-2" >%</span>
                                 </div>

                                 <div className="m-2 d-flex align-items-center">
                                    <label htmlFor="SGST" className=" ws-nowrap mx-2 mb-0 align-items-center d-flex ">SGST :</label>
                                    <span className="fs-5 px-2" >{products.GST / 2}%</span>
                                 </div>

                                 <div className="m-2 d-flex align-items-center">
                                    <label htmlFor="CGST" className="  ws-nowrap mx-2 ">CGST :</label>
                                    <span className="fs-5 px-2" >{products.GST / 2}%</span>
                                 </div>
                                 <div className="m-auto   flex-column px-4  w-100 d-flex align-items-center">
                                    <button type="submit" className={`btn border-0 btn-sm  p-2 d-flex align-items-center`}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-plus-square rounded btn-primary" viewBox="1 1 14 14">
                                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                       </svg>
                                       <span className="fs-5 px-2 " >
                                          Add
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </main>

                  </div>
               </div>
            </div>
         </div>
      </>

   )
}

export default Perticulars