import { AiFillEdit } from "react-icons/ai";
import {BsFillTrashFill} from "react-icons/bs"
interface IProps {
//   errorCode: number,
//   msg: string,
    userId: number,
    id: number,
    date: string,
    location: string,
    title: string,
    body: string,
    url: string
}
const Post: React.FC<IProps> = ({userId,id,url,location,date,title,body})=>{

  const deltePost = () =>{
    var procced = confirm("Do you want to delete post");
    if (!procced) return 
    alert("Post delted");
  } 
  return (<div>
    <div className="text-center my-5">
    <h2 className="text-4xl font-title-header my-4">
     ~ {title} ~
    </h2>
    <h3 className="text-xl body-main underline">
      {date} | {location}
    </h3>
    </div>
    <div className="bg-green-300 flex justify-center gap-x-28 mb-7">
    <button className="rounded-full bg-white hover:bg-gray-300 p-3">
      <AiFillEdit/>
    </button>
    <button onClick={deltePost} className="rounded-full bg-white hover:bg-gray-300 p-3">
      <BsFillTrashFill/>
    </button>
    </div>

    <p className="text-2xl font-body-main">
        {body}
    </p>

    <div className="flex justify-center mt-10">
      <img src={url} className="h-auto w-auto max-w-screen-md"/>
    </div>
  </div>
  )
};

export default Post