import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';
// Styles
import "./style.scss"

const Footer = () => {
    return (
        <div className='agency_footer container'>
            <div className='agency'>
                <h3 className='title'>Agency</h3>
            </div>
            <div className='menu'>
                <h4 className='title'>Menu</h4>
                <ul className="lists">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
            <div className='services'>
                <h4 className='title'>Services</h4>
                <ul className="lists">
                    <li><Link to="">Design</Link></li>
                    <li><Link to="">Development</Link></li>
                    <li><Link to="">Marketing</Link></li>
                    <li><Link to="">See More</Link></li>
                </ul>

            </div>
            <div className='Social_icons'>
                <ul className="social_icons">
                    <li><Link to="">
                        <FacebookFilled />
                    </Link></li>
                    <li><Link to="">
                        <TwitterCircleFilled />

                    </Link></li>
                    <li><Link to="">
                        <InstagramFilled />
                    </Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Footer