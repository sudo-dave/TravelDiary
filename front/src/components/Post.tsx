
interface IProps {
//   errorCode: number,
//   msg: string,
    userId: number,
    id: number,
    date: string
    title: string,
    body: string,

}

const Post: React.FC<IProps> = ({userId,id,date,title,body})=>{
  return (<div>
    <h2 className="capitalize text-center my-4">
       <span>Date:{date} </span> {title}
    </h2>
    <p>
        {body}
    </p>
  </div>
  )
};

export default Post