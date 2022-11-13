import {BsFillPlusCircleFill, BsGear } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-indigo-500 font-logo-main flex">
      <BsGear/>
      <h1>WonderLust</h1>
      <BsFillPlusCircleFill/>
    </div>
  )
}
export default Header