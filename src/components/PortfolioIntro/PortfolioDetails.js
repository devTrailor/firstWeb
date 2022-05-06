import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const PortfolioDetails = (props) => {
    const {projects} = props
    console.log(projects);
  return (
    <div>PortfolioDetails</div>
  )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects: state.projects
    }
}
export default connect(mapStateToProps)(PortfolioDetails)