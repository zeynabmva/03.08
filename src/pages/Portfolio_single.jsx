import { useParams } from "react-router-dom"
import React from "react"
import {useEffect, useState} from "react"
function Portfolio_single() {
    const {id}=useParams()
    const [data,setData]=useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/recipes/detail/${id}`)
            .then((a) => a.json())
            .then((a) => setData(a))
    }, [])
  return (
    <>
          <section style={{backgroundImage: `url("${data.image}")`}} className="portfolio_single_first position full-container">
                <div key={data.id} className="portfolio_single_prds">
                        <div className="portfolio_single_prd">
                            <h2 className="h2">{data.name}</h2>
                      <p className="p">{data.summary}</p>
                        </div>
                        <div className="portfolio_single_prd_infos">
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Preparation :</h3>
                                <p className="p">{data.preparation}</p>
                            </div>
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Cooking :</h3>
                                <p className="p">{data.cooking}</p>
                            </div>
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Type :</h3>
                                <p className="p">{data.type}</p>
                            </div>
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Services :</h3>
                                <p className="p">{data.services}</p>
                            </div>
                        </div>
                    </div>
            </section>
    
            <section className="portfolio_empty"></section>

            <section className="portfolio_single_second">
                <div className="portfolio_single_container">
                    <h2>Ingredients:</h2>
                  <p className="p">{data.ingredients}</p>
            <div className="portfolio_single_img">
                <img src={data.addition_pic}></img>
                    <p className="p">The Organic Products</p>
            </div>
                  <h2>Instruction: </h2>
                  <p className="p">
                      {data.instructions}
                  </p >
            <h2>Products:</h2>
        </div >
    </section >
    </>
  )
}

export default Portfolio_single