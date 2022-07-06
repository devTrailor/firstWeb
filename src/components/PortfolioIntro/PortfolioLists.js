import React from 'react'

import { Link } from "react-router-dom"
import { useState } from 'react';
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

    const filterCards = (category) => {
        const updatedList = menu.filter((elm) => {
            return elm.category === category
        })
        setMenu(updatedList)

    }
    return (
        <div className="container portfolio-intro">
            <h5 className="title2">PORTFOLIO</h5>
            <h1 className="title1">Latest Work</h1>
            <div className="btn_group app__flex">
                <button onClick={() => setMenu(menu)}>All</button>
                <button onClick={() => filterCards("web")}>Web</button>
                <button onClick={() => filterCards("react")}>React</button>
                <button onClick={() => filterCards("javascript")}>Javascript</button>
                <button onClick={() => filterCards("css")}>HTML/CSS</button>
            </div>
            <div className="portfolio_container app__flex">
                {menu.map((item) => {
                    return (
                        <Link to={"/project/" + item.id}>
                            <PortfolioCard img_url={item.img_url} title={item.title} />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default PortfolioLists