import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Blog_single from "./Blog_single"
function Blog() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/blogs/list/")
            .then((a) => a.json())
            .then((a) => setData(a))
    }, [])
  
    return (
        <>
            <section className="blog_begin full-container">
            </section>

            <section className="blog_first">
                <div className="container blog_products">
                    {data.map((a) => (

                        <div key={a.id} className="blog_product position">
                        <img src= {a.image}></img>
                        <div className="blog_prd_absolute_date">
                            <h2 className="h3">25 <br></br> Nov</h2>
                        </div>
                        <div className="blog_prd_absolute">
                            <div className="user"><h4 className="user"><i className="fa-solid fa-user"></i>By {a.farmer}</h4></div>
                            <h3 className="name">{a.blog_name}</h3>
                            <p className="p">{a.blog_title}</p>
                            <Link to={`/blog/blog_single/${a.id}`}>
                            <h3 className="readmore">Read More
                                <div className="arrow">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </h3>
                            </Link>
                        </div>
                        </div>
                    ))}
                     
                    
                </div>

            </section>

        </>
    )
}

export default Blog