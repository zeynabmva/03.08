import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
function Portfolio() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch("http://127.0.0.1:8000/recipes/list/")
            .then((a) => a.json())
            .then((a) => setData(a))
    }, [])
  return (
    <>
          <section className="portfolio_first full-container">
            <p>Recipes</p>
          </section>

          <section className="portfolio_second">
              <div className="container portfolio_second_products">
                {data.map((a)=>(
                    <Link key={a.id} to={`/portfolio/portfolio_single/${a.id}`}>
                    <div className="portfolio_second_product">
                        <div className="portfolio_second_product_img position">
                            <div className="portfolio_for_before">
                                <img src={a.image}/>
                            </div>
                        </div>
                        <div className="portfolio_second_product_info">
                            <h2 className="portfolio_h2">{a.name}</h2>
                            <h4 className="h4">{a.type}</h4>
                        </div>
                    </div>
                    </Link>

                ))}
                  
        
                  </div>
          </section>
    </>
  )
}

export default Portfolio