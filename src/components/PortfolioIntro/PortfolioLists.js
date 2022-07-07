import React, { useState } from 'react'
import { Link } from "react-router-dom"
import PortfolioCard from '../PortfolioProjectCard/PortfolioCard';
// styles
import "./style.scss"

const PortfolioLists = (props) => {
    console.log(props);
    const { projects } = props
    console.log(projects);
    const [menu, setMenu] = useState(projects)
    console.log(menu);

    // filter Cards


    const filterItem = (catgItem) => {
        const updatedLists = projects.filter((elm) => {
            return elm.category === catgItem
        })
        console.log(updatedLists);
        setMenu(updatedLists)
    }
    return (
        <div className="container portfolio-intro">
            <h5 className="title2">PORTFOLIO</h5>
            <h1 className="title1">Latest Work</h1>
            <div className="btn_group app__flex">
                <button onClick={() => setMenu(projects)}>All</button>
                <button onClick={() => filterItem("pics")}>Pics</button>
                <button onClick={() => filterItem("photo")}>Photos</button>
                <button onClick={() => filterItem("illustrate")}>Illustrate</button>
                <button onClick={() => filterItem("design")}>Design</button>
            </div>
            <div className="portfolio_container app__flex">
                {menu && menu.map((item) => {
                    return (
                        <Link to={"/project/" + item.id} key={item.id}>
                            <PortfolioCard img_url={item.img_url} title={item.title} />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default PortfolioLists