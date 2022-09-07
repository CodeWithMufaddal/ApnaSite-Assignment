import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ContextData = createContext()

const DataProvider = ({ children }) => {
   let Bill = localStorage.getItem('Bill')
   let Data = Bill ? JSON.parse(Bill) : []

   const Store = () => {
      return localStorage.getItem('Bill')
   }

   const [totalAmount, setTotalAmount] = useState({ TotalAmount: 0, TotalQTY: 0, })
   const [invoices, setInvoices] = useState([])
   const [products, setProducts] = useState({
      Name: '',
      Price: 0,
      QTY: 0,
      GST: 18,
      Unit: ''
   })

   const [data, setData] = useState({
      invoiceNo: Data?.length + 1,
      Date: new Date().toISOString().slice(0, 10),
      PartyName: '',
      Mobile: '',
      Particulars: [],
   })



   const handleOnSubmit = async (e) => {
      e.preventDefault()

      if (!Store()) {
         localStorage.setItem('Bill', `[${JSON.stringify(data)}]`)
         let Bill = localStorage.getItem('Bill')
         let Data = Bill ? JSON.parse(Bill) : []
         setData(() => ({
            invoiceNo: Data?.length + 1,
            Date: new Date().toISOString().slice(0, 10),
            PartyName: '',
            Mobile: '',
            Particulars: [],
         }))
         setInvoices(() => Data)
         return;
      }

      let Data = await JSON.parse(Store())
      await Data.push(data)
      let toString = JSON.stringify(Data)
      localStorage.setItem('Bill', `${toString}`)

      setData(() => ({
         invoiceNo: Data?.length + 1,
         Date: new Date().toISOString().slice(0, 10),
         PartyName: '',
         Mobile: '',
         Particulars: [],
      }))
      setInvoices(() => Data)
   }



   useEffect(() => {
      let Data = Store() ? JSON.parse(Store()) : []
      setInvoices(() => Data)
      return () => {
         !Store() && localStorage.setItem('Bill', [])
      }
   }, [setInvoices, setData])



   return (
      <ContextData.Provider value={{ data, setData, handleOnSubmit, setProducts, products, invoices, setInvoices, totalAmount, setTotalAmount }}>
         {children}
      </ContextData.Provider>
   )
}

const useData = () => {
   return useContext(ContextData)
}


export { DataProvider, useData }