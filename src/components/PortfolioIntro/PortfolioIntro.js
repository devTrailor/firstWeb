import React from 'react'
import { useSelector } from 'react-redux'
import PortfolioLists from './PortfolioLists';

const PortfolioIntro = () => {
    const projects = useSelector((state) => state.projects)
    console.log(projects);

    return (
        <div className='portfolio_intro'>
            <PortfolioLists projects={projects} />
        </div>
    )
}


export default PortfolioIntro