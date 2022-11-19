

const Form = () => {
    const onSubmit = () => {
        alert("hi how are u")
    };
    const getLocation = () =>{
        alert("yoo")
    }

  return (
    <form className="bg-red-100 p-24 text-center" onSubmit={onSubmit}>
        <div className="bg-yellow-100">
            <label className="block" htmlFor="title">Title</label>
            <input className="w-full" id="title"  />
        </div>
        <div className="bg-yellow-100">
            <label className="block" htmlFor="location">Location</label>
            <button type="button" onClick={getLocation}
            className="bg-green-300">Get Location</button>
            <input id="location" className="w-1/3"/>
        </div>
        <div className="bg-yellow-100">
            <label className="block" htmlFor="image">Image</label>
            <input id="image" type="file"/>
        </div>
        <div className="bg-yellow-100">
            <label className="block" htmlFor="body">Body</label>
            <textarea className="w-full"id="body"></textarea>
        </div>
        <button className="bg-red-400" type="submit">Sign up</button>
    </form>
  )
}
export default Form

