import { Tabs } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import PortfolioCard from '../PortfolioProjectCard/PortfolioCard';
// styles
import "./style.scss"

const PortfolioLists = ({ projects }) => {
    const { TabPane } = Tabs;
    console.log(projects);
    return (
        <div className="container portfolio-intro">
            <h5 className="title2">PORTFOLIO</h5>
            <h1 className="title1">Latest Work</h1>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Show All" key="1">
                    <div className="container card-container">
                        {projects[0].map((item) => {
                            return (
                                <div>
                                    <Link to={'project/' + item.id}>
                                        <PortfolioCard img_url={item.img_url} title={item.title} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </TabPane>
                <TabPane tab="Web" key="2" className='web'>
                    <div className="container card-container">
                        {projects[1].map((item) => {
                            return (
                                <>
                                    <div>
                                        <Link to={'project/' + item.id}>
                                            <PortfolioCard img_url={item.img_url} title={item.title} />
                                        </Link>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </TabPane>
                <TabPane tab="Javascript" key="3" className='javaScript'>
                    {/* <Link to={'project/' + item.id}>
                        <PortfolioCard img_url={item.img_url} title={item.title} />
                    </Link> */}

                </TabPane>
                <TabPane tab="React-Js" key="4" className='react-js'>
                    {/* <Link to={'project/' + item.id}>
                        <PortfolioCard img_url={item.img_url} title={item.title} />
                    </Link> */}
                </TabPane>
            </Tabs>
        </div>
    );
}

export default PortfolioLists