import { FormEvent, useState } from "react";


// https://claritydev.net/blog/typescript-typing-form-events-in-react/

// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
interface UserFormState {
    name: string,
    location: string,
    body: string
}
const Form = () => {
    const onSubmit = () => {

    const [userForm,setUserForm] = useState<UserFormState>({
        name: "",
        location: "",
        body: ""
    })
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("the thign");
    };
    const getLocation = () =>{
        alert("yoo")
    }

  return (
    <form className="bg-red-100 p-5 text-center" onSubmit={onSubmit}>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="title">~Title~</label>
            <input className="w-full my-4 p-2" id="title"  />
        </div>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="location">~Location~</label>
            <button type="button" onClick={getLocation}
            className="bg-green-300 my-4 p-2">Get Location</button>
            <input id="location" className="w-1/2 p-2"/>
        </div>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="image">~Imager~</label>
            <input id="image" className="my-4 bg-gray-200" type="file"/>
        </div>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="body">~Body~</label>
            <textarea  rows={15} className="w-full my-4 p-2"id="body"></textarea>
        </div>
        <button className="bg-red-400" type="submit">Post</button>
    </form>
  )
}
export default Form

