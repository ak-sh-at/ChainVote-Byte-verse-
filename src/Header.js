import React from 'react'
import img1 from './images/image1.jpg'
import background from './images/backimg.jpeg'
const Header = () => {
  return (
    <div className="head" style={{backgroundImage:`url(${background})`}}>
        <header>
        <div className='voteimage'>
        <img src={img1} alt="voting image" width="150px" />
        </div>
        <div className='tag' >
        <p className="heading">Your Vote Matters!</p>
        </div>
        </header>
    </div>
    
  )
}

export default Header