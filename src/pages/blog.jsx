import "./blog.css"
import number from "../assets/image.png"
import nature from '../assets/nature.png'
const Blog = ()=>{
    return(
        <>
        <div className="blog">

     
        <div className="blog1">
            <img src={number} alt=""  className="hel"/>
            <h1>Years Of Successful <br />
            Working <br />
            The Market</h1>
<button>READ MORE</button>
        </div>
        <div className="blog2">
<img src={nature} alt="" width={612} height={657} />
        </div>
        </div>

        </>
    )
}
export default Blog;