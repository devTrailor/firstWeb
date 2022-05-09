import React from 'react'
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons';
// styles
import "./Details.scss"

const PortfolioDetails = (props) => {
  // console.log(props);
  const { id } = useParams()
  console.log(id);
  const { projects } = props
  console.log(projects);
  console.log(projects[0][id]);

  if (projects) {
    const { title, img_url } = projects[0][id]
    // var { title,img_url } = projects[1][id]
    console.log(title, img_url);
    return (
      <div className='project-datails-section'>
        <div className="project-details container">
          <h6 className="title"><ArrowLeftOutlined /><Link to="/" className='back-link'>BACK TO PORTFOLIO</Link></h6>
          <h1 className="title1">{title}</h1>
          <h5 className="sub-title title">Agency provides a full service range including technical skills, design, business understanding.</h5>
          <p className="description">Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          <div className="project-info">
            <div className="category">
              <h6 className="title">CATEGORY</h6>
              <ul className="lists">
                <li>Art Direction</li>
                <li>User Interface</li>
                <li>Branding Strategy</li>
                <li>Print Design</li>
                <li>3D Render</li>
              </ul>
            </div>
            <div className="clients">
              <h6 className="title">CLIENTS</h6>
              <div className="client-details">
                <div className="company-logo">
                  <img src={img_url} alt="Loading..." />
                </div>
                <h6 className="title date">DATE</h6>
                <span>Dec 2021</span>

              </div>
            </div>
          </div>
          <div className="project-thumbnail">
            <img src="" alt="Loading...." />
          </div>

          <div className="problem">
            <h2 className="title">Problem</h2>
            <p className="description para-1">
              Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
            <p className="description para-2">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
            <div className="project-imgs">

            </div>
          </div>
          <div className="solution">
            <h2 className="title">Solution</h2>
            <p className="description para-1">
              Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
            </p>
            <p className="description para-2">
              Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
            <div className="social-links">
              <span className="title">SHARE ON</span>
              <ul className="lists container">
                <li className="facebook"></li>
                <li className="twitter"></li>
                <li className="instagram"></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps)(PortfolioDetails)