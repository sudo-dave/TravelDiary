import {BsFillPlusCircleFill, BsGear } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="bg-indigo-500 font-logo-main flex p-10 justify-between">
    <IconContext.Provider value={{ color: "black", size: "2.2rem" }}>
      <a className="hover:text-red-50" href="/settings">
      <BsGear/>
      </a>
      <h1 className="text-white text-5xl">WonderLust</h1>
      <a href="/add">
      <BsFillPlusCircleFill/>
      </a>
    </IconContext.Provider>
    </div>
  )
}
export default Header