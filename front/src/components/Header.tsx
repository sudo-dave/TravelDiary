import {BsFillPlusCircleFill, BsGear } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="bg-indigo-500 flex p-10 justify-between">
    <IconContext.Provider value={{size: "2.5rem" }}>
      <a className="" href="/settings">
      <BsGear className="text-black hover:text-gray-400"/>
      </a>
      <a href="/">
      <h1 className="text-white font-logo-main text-6xl hover:text-gray-400">Wonderlust</h1>
      </a>
      <a href="/add">
      <BsFillPlusCircleFill className="text-black hover:text-gray-400"/>
      </a>
    </IconContext.Provider>
    </div>
  )
}
export default Header