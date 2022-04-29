import React from 'react'
// Styles
import "./style.scss"

const SectionIntro = (props) => {
  return (
    <div className='section-intro container'>
    <h1 className="title">{props.title}</h1>
    <p className="description">{props.intro_para}</p>
    </div>
  )
}

export default SectionIntro