import React from 'react'
import { AiFillPhone } from "react-icons/ai"
import { BsChatSquareDots} from "react-icons/bs"
import { FaCoins } from "react-icons/fa";

const TopBar = () => {
    return(
        <div className='flex justify-between py-2 px-2'>
            <div className='flex'>
               <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
                <h1> BeachFlex</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                   <FaCoins size={20} className='mr-2 text-[var(--primary-dark)]'/>
                   <p className='text-sm text-gray-700'>9AM - 5AM</p>
                </div>
                <div className='hidden md:flex  items-center px-6'>
                    <AiFillPhone  size={20} className='mr-2 text-[var(--primary-dark)]'/>
                    <p className='text-sm text-gray-700'>1-888-734-3424</p>
                </div>
                <button>Get a Free Quote</button>
            </div>
        </div>
    )
}
export default TopBar
