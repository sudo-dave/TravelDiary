import Header from "../components/Header"
import Post from "../components/Post"
import useAxios from "../hooks/useAxios"
import { IPost } from "../types"
// test
// https://jsonplaceholder.typicode.com/posts

const Home = () => {
  const {response,error,loading} = useAxios({
    method: "get",
    url: "/posts",
    headers: {
      accept: '*/*'
    }
  });
  return (
    <div>
      <Header/>
      <div className="bg-red-600 p-24">
      {!loading && !error && (
        response.data.map(({id, date, location, title, body, url}: any)=> <Post key={id} date={date} 
        location={location} title={title} body={body}
        url={url} />))
      }
      </div>
    </div>
  )
}
export default Home