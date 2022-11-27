import Header from "../components/Header"
import Post from "../components/Post"
import { IPost } from "../types"
// test
// https://jsonplaceholder.typicode.com/posts
const TestData  = [
        {
            "id": 0,
            "date": "12-19-22",
            "location": "Los Angles, CA",
            "title": "Day 05: First day in New York and disater",
            "body": "I am text",
            "tags": ["Fun","Bad","Eruope"],
            "url": "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
        },
        {
            "id": 1,
            "date": "12-20-22",
            "location": "Los Angles, CA",
            "title": "loreisu ads asdfasdfd mp",
            "body": "I am asdf asdfasd f",
            "tags": ["Fun","adfasdf","Eruope"],
            "url": "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
        },
        {
            "id": 2,
            "date": "12-21-22",
            "location": "Los Angles, CA",
            "title": "Dcmcmcmamdc mcmdmcmmcmdm",
            "body": "I am text",
            "tags": ["Fun","asdfadsf","Eruope"],
            "url": "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
        },
        {
            "id": 3,
            "date": "12-23-22",
            "location": "Los Angles, CA",
            "title": "asdfjasdfjkaksdfjk",
            "body": "I am text",
            "tags": ["Fun","Bad","asdfasdf"],
            "url": "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
        }
    ]
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="bg-red-600 p-24">

      {
        TestData.map((post)=> <Post key={post.id} date={post.date} 
        location={post.location} title={post.title} body={post.body}
        url={post.url} />)
      }
      </div>
    </div>
  )
}
export default Home