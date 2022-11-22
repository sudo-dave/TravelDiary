

const Form = () => {
    const onSubmit = () => {
        alert("hi how are u");
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

