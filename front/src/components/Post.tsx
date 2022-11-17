
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
  return (<div>
    <div className="text-center my-5">
    <h2 className="text-4xl font-title-header my-4">
     ~ {title} ~
    </h2>
    <h3 className="text-xl body-main underline">
      {date} | {location}
    </h3>
    </div>
    <p className="text-2xl font-body-main">
        {body}
    </p>
    <div className="flex justify-center mt-10">
      <img src={url} className="h-auto w-auto max-w-screen-md"/>
      {/* <img src={url} className="block text-center"/> */}
    </div>
  </div>
  )
};

export default Post