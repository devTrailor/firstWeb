import React from 'react'
// styles
import "./style.scss"
const PortfolioCard = (props) => {
    return (
        <>
            <div className="portfolio-card">
                <div className="card-body">
                    <div className="project-img">
                        <img src={props.img_url} alt="Loading..." />
                    </div>
                    <h2 className="title">{props.title}</h2>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard