import { useContext } from 'react'
import BeachflexContext from "./context/BeachflexContext";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";


function Navbar() {
  const { nav, handleNav } = useContext(BeachflexContext);

  return (
    <div className=" w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/deals">Deals</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      {/* hamburger Icon  */}
      {nav === true ? (
        <div className="sm:hidden z-10">
          <FaBars size={20} className="mr-4 cursor-pointer" onClick= {handleNav}/>
        </div>
      ) : (
        <div  className="sm:hidden z-10">
          <FaTimes size={20} className="mr-4 cursor-pointer" onClick= {handleNav} />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        onClick={() => {handleNav}}
        className={
          !nav
            ? " fixed overflow-y-hidden md:hidden flex flex-col ease-in duration-300 top-[55px] left-0 w-full h-full border text-gray-300 px-4 py-7 bg-black/90"
            : "  fixed top-17 h-full left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-xl py-8">
            <a href="#gallery"  onClick= {handleNav}>Gallery</a>
          </li>
          <li className="text-xl py-8">
            <a href="#deals" onClick= {handleNav}>Deals</a>
          </li>
          <li className="text-xl py-8">
            <a href="#contact" onClick= {handleNav}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
