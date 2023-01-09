import React from 'react'
import './style.scss'
import Navbar from '../Navbar'

import cloud from '../../images/cloud.png'
import cloudSoft from '../../images/cloud-soft.png'
import IntroContent from './intro-content'

const Intro = () => {
  return (
    <div className="intro_section">
      <div className="vector_bg" id="parallax"></div>
      {/* <img src={cloud} alt="" className='cloud' />
      <img src={cloudSoft} alt="" className='cloud_soft' /> */}
      <div className="content">
        <Navbar />
        <IntroContent />
      </div>
    </div>
  )
}

export default Intro