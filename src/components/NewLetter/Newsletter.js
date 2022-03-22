import { Button, Input } from 'antd'
import React from 'react'
// Styles
import "./style.scss"

const Newsletter = () => {
    const formHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='news_letter container'>
            <h2 className="title1">Newsletter</h2>
            <div className="form">
                <form onSubmit={formHandler} >
                    <Input placeholder='Your email' />
                    <button type='submit'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter