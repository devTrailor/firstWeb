import { Collapse, Button } from 'antd'
// import { Button } from 'bootstrap';
import React from 'react'
// Styles
import "./style.scss"

export const Faq = () => {
    const { Panel } = Collapse;
    return (
        <div className='container ___faqs'>

            <h5 className="title4">FAQ</h5>
            <div className="faq_box">

                <div className="faq_info">

                    <h4 className="title2">
                        Frequently Asked Questions
                    </h4>
                    <p className="description">
                        A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
                    </p>
                    <Button>Contact Us</Button>

                </div>
                <div className="accordion">
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="A digital agency is a business" style={{color: "red"}} key="1">
                            <p style={{ paddingLeft: 24 }} className="description">
                                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
                                as a welcome guest in many households across the world.
                            </p>
                        </Panel>
                        <Panel header="Hire to outsource your digital" key="2">
                            <p style={{ paddingLeft: 24 }} className="description">
                                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
                                as a welcome guest in many households across the world.
                            </p>
                        </Panel>
                        <Panel header="Marketing efforts" key="3">
                            <p style={{ paddingLeft: 24 }} className="description">
                                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
                                as a welcome guest in many households across the world.
                            </p>
                        </Panel>
                        <Panel header="Can provide your business" key="3">
                            <p style={{ paddingLeft: 24 }} className="description">
                                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
                                as a welcome guest in many households across the world.
                            </p>
                        </Panel>
                    </Collapse>

                </div>

            </div>




        </div>
    )
}
