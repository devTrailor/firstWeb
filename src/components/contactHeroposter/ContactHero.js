import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './style.scss'

const ContactHero = (props) => {
    return (
        <div className='contact_hero'>
            <div className="text_info">
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.para}</p>
                <div className="contact_btn">
                    <Button>
                        <Link to= {props.path}>{props.btn_name}</Link>
                    </Button>
                </div>
            </div>
            <div className="poster">
                <img src={props.poster} alt="Loading...." />
            </div>
        </div>
    )
}

export default ContactHero