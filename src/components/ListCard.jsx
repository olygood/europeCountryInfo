import { useState } from "react"    
import { createPortal } from "react-dom"
import { MondalContent } from "./MondalContent"
export function ListCard({country}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <li onClick={()=> setShowModal(!showModal)} className="realtive cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform">
        <h2 className="absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded">{country.name.common}</h2>
        <img className="w-full h-full object-cover rounded" src={country.flags.svg} alt="" />
    </li>
     {showModal && createPortal(<MondalContent country={country} closeMondal={()=> setShowModal(!showModal)} />, document.body)}
    </>
  )
}