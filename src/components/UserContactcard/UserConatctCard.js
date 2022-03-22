import React from 'react'

const UserConatctCard = (props) => {
    return (
        <div className='card'>
            <div className="card-body">

                <div className="icon">
                    <div className="img_icon">
                        {props.img_icon}
                    </div>
                    <h4 className="title">{props.title}</h4>
                </div>
                <p className="description">
                    {props.number}
                </p>

            </div>
        </div>
    )
}

export default UserConatctCard