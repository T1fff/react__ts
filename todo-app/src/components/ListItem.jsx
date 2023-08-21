/* eslint-disable react/prop-types */
import { Check } from "../resources/check"
import { Delete } from "../resources/delete"

export const ListItem = ({title, description}) => {
    return(
        <li className="w-4/6 md:5/6 h-fit mx-auto bg-teal-100 p-4 m-3 rounded-3xl flex lg:hover:scale-105 transition ease-in-out duration-300 drop-shadow-md">
          <button><Check fill='gray'/></button>      
          <div className="item-text grow mx-3">
            <input type="text" value={title} className=" bg-transparent font-bold text-xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 rounded px-1"/>
            <textarea type="text" value={description} className=" bg-transparent text-lg w-full h-[8em] md:h-[5em] resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 rounded px-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-teal-50 scrollbar-w-2 scrollbar-thumb-rounded scrollbar-track-rounded"/>
          </div> 
          <button><Delete fill='gray' /></button>   
          
        </li>
    )
}