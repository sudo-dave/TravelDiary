import { useState, FormEvent, ChangeEvent } from "react";
import { IUserFormState } from "../types";

const AddForm= () => {

    const [userForm, setUserForm] = useState<IUserFormState>({
        title: "",
        location: "",
        body: "",
        tags: []
    })
    const onSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        alert("the thign");
    };
    const getLocation = () => {
        alert("yoo");
    }
    const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = e.target.value;
        setUserForm({...userForm, [e.target.id]: val})
        alert(JSON.stringify(userForm));
     }
    return (
    <form className="bg-red-100 p-5 text-center" onSubmit={onSubmit}>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="title">~Title~</label>
            Please create add some vaules
            <input className="w-full my-4 p-2" id="title" onChange={onFieldChange} />
        </div>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="location">~Location~</label>
            <button type="button" onClick={getLocation}
            className="bg-green-300 my-4 p-2">Get Location</button>
            <input id="location" className="w-1/2 p-2" onChange={onFieldChange}/>
        </div>
        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="image">~Image~</label>
            <input id="image" className="my-4 bg-gray-200" accept="image/png, image/jpeg" type="file"/>
        </div>

        <div className="bg-yellow-100">
            <label className="block font-bold text-3xl font-title-header" htmlFor="body">~Body~</label>
            <textarea rows={15} className="w-full my-4 p-2"id="body" onChange={onFieldChange} ></textarea>
        </div>
        <button className="p-3 text-2xl text rounded-full bg-red-400" type="submit">POST</button>
    </form>
    )
}

export default AddForm