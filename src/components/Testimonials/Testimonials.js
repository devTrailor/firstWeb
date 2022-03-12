import { Col, Row } from 'antd'
import React from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
// Styles

import "./style.scss"

const Testimonials = () => {
    return (
        <div className='testimonial-header'>
            <h5 className="title4">Testimonials</h5>
            <p className="description">
                What Our Clients Saying
            </p>
            <div className="container testimonial_cards">
                <Row>
                    <Col>
                        <TestimonialCard img_url={require("../../assets/imags/star.png")}
                            description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                            img_tag={require("../../assets/imags/avatar1.png")}
                            title="Ritik Sharma" company_name="Meta Inc." />
                    </Col>
                    <Col>
                        <TestimonialCard img_url={require("../../assets/imags/star.png")}
                            description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                            img_tag={require("../../assets/imags/avatar1.png")}
                            title="Ritik Sharma" company_name="Meta Inc." />

                    </Col>
                    <Col>
                        <TestimonialCard img_url={require("../../assets/imags/star.png")}
                            description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                            img_tag={require("../../assets/imags/avatar1.png")}
                            title="Ritik Sharma" company_name="Meta Inc." />

                    </Col>
                    <Col>
                        <TestimonialCard img_url={require("../../assets/imags/star.png")}
                            description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                            img_tag={require("../../assets/imags/avatar1.png")}
                            title="Ritik Sharma" company_name="Meta Inc." />

                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Testimonials