import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
// Styles
import "./style.scss"

const OurBlogs = () => {

    const blogData = [
        {
            id: "1",
            img_url: require("../../assets/imags/1.webp"),
            title: "Stories",
            description: "Agency is a business you hire to outsource",
            date: "5 Nov, 2021"
        },
        {
            id: "2",
            img_url: require("../../assets/imags/1.webp"),
            title: "Design",
            description: "Outsource your digital marketing efforts",
            date: "29 Oct, 2021"
        },
        {
            id: "3",
            img_url: require("../../assets/imags/1.webp"),
            title: "Marketing",
            description: "Your business with a variety of digital",
            date: "21 Oct, 2021"
        },


    ]

    return (
        <div className='container our_blogs'>
            <h4 className="title2">Our Blog</h4>
            <p className="description">Latest Blog Articles</p>
            <div className="blog_cards">
                {blogData.map((items) => {
                    return (
                        <>
                            <BlogCard key={items.id} blogImg={items.img_url}
                                blogTitle={items.title} blogDescription={items.description} blogDate={items.date} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default OurBlogs