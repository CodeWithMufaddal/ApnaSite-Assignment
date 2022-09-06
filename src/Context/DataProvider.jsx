import { createContext, useContext, useState, useEffect } from "react";

const ContextData = createContext()

const DataProvider = ({ children }) => {

   let Bill = localStorage.getItem('Bill')
   let Data = Bill ? JSON.parse(Bill) : []

   const [data, setData] = useState(
      {
         invoiceNo: Data?.length + 1,
         Date: Date().slice(0, 15),
         PartyName: '',
         Mobile: '',
         Particulars: [{
            Name: '',
            Price: '',
            Quantity: '',
            CGST: '',
            SGST: '',
            Amount: ''
         }],
         CGST: '',
      }
   )

   const Store = () => {
      return localStorage.getItem('Bill')
   }

   useEffect(() => {
      return () => {
         !Store() && localStorage.setItem('Bill', [])
      }
   }, [setData])

   const handleOnSubmit = async (e) => {
      e.preventDefault()
      let Storage = Store()

      if (!Storage) {
         localStorage.setItem('Bill', `[${JSON.stringify(data)}]`)
         let Bill = localStorage.getItem('Bill')
         let Data = Bill ? JSON.parse(Bill) : []
         setData({
            invoiceNo: Data?.length + 1,
         })
         return;
      }

      let Data = await JSON.parse(Storage)
      await Data.push(data)
      let toString = JSON.stringify(Data)
      localStorage.setItem('Bill', `${toString}`)
      setData({
         invoiceNo: Data?.length + 1,
      })
   }

   return (
      <ContextData.Provider value={{ data, setData, handleOnSubmit }}>
         {children}
      </ContextData.Provider>
   )
}

const useData = () => {
   return useContext(ContextData)
}


export { DataProvider, useData }