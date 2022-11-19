

const Form = () => {
    const onSubmit = () => {
        alert("hi how are u")
    };
  return (
    <form className="bg-red-100" onSubmit={onSubmit}>
        <div className="">
            <label htmlFor="title">Title</label>
            <input id="title"  />
        </div>
        <div className="">
            <label htmlFor="location">Location</label>
            <input id="location"  />
        </div>
        <div className="">
            <label htmlFor="image">Image</label>
            <input id="image" type="file"/>
        </div>
        <div className="">
            <label htmlFor="body">Body</label>
            <input id="body"  />
        </div>
        <button className="bg-red-400" type="submit">Sign up</button>
    </form>
  )
}
export default Form

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example