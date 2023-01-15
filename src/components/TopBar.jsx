import React from 'react'
import { AiFillPhone } from "react-icons/ai"
import { BsChatSquareDots} from "react-icons/bs"
import { FaCoins } from "react-icons/fa";

const TopBar = () => {
    return(
        <div className='flex justify-between py-2 px-2'>
            <div>
               <BsChatSquareDots />
                <h1> BeachFlex</h1>
            </div>
            <div>
                <div>
                   <FaCoins />
                   <p>9AM - 5AM</p>
                </div>
                <div>
                    <AiFillPhone />
                    <p>1-888-734-3424</p>
                </div>
                <button>Get a Free Quote</button>
            </div>
        </div>
    )
}
export default TopBar
