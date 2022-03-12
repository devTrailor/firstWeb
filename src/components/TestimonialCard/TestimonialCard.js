import React from 'react'
import "./style.scss"



const TestimonialCard = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="stars">
                        <img src={props.img_url} alt="" />
                    </div>
                    <p className="description">
                        {props.description}
                    </p>

                    <div className="user-tag">
                        <img src={props.img_tag} alt="" />
                        <div className="user-info">
                            <h5 className="title">
                               {props.title}
                            </h5>
                            <p className="description">{props.company_name}</p>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default TestimonialCard