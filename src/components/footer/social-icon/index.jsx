import React from 'react'

const SocialIcon = ({color,icon,link}) => {
  return (
    <div className='social-icon' style={{backgroundColor:color}} onClick={()=>{
        window.open(link,"_blank")
    }}>{icon}</div>
  )
}

export default SocialIcon