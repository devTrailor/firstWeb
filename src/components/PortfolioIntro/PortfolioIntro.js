import React from 'react'
import { connect } from 'react-redux'
import PortfolioLists from './PortfolioLists';

const PortfolioIntro = (props) => {
    const { projects } = props;
    console.log(projects);

    return (
        <div>
            <PortfolioLists projects={projects} />
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, null)(PortfolioIntro)