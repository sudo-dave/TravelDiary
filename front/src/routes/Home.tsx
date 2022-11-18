import Header from "../components/Header"
import Post from "../components/Post"

// test
// https://jsonplaceholder.typicode.com/posts
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="bg-red-600 p-24">

      <Post userId={0} id={0} location="Los Angeles, CA" date={"12-23-1998"} url="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg" title={"Day 05: First day in New York and disater"} 
      body={"est rerum tempore vitae\nsequi sint nihil reprehenderit" 
      + "dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel"+
      "nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque" + 
      "nisi nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque" +
      "nisi  molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi"}/>
      </div>
     
     
    </div>


  )
}
export default Home