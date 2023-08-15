import React from 'react'
import Footer from "./Footer"
import Header from './Header'

export default function Votepage(props) {
    
  return (
    <>
    <Header/>
    <div  style={{height:'200vh'}}>
      <div className='container1'>
      <div className='col1'>
        <div className='col1a'>
      <p>{props.title}</p>
      </div><div className='col1b'>
      <img src={props.img} alt="img" width="300px" height="300px" />
      </div>
      </div>
      <div className="container2">
      <div className='col2'>
      <p>{props.name1}</p>
      <img src={props.cimage1} alt="mad" width="300px" height="300px" />
      <br/>
      <button type="submit">Vote for me</button>
      </div>
      <div className='col3'>
      <p>{props.name2}</p>
      <img src={props.cimage2} alt="mad" width="300px" height="300px" />
      <br/>
      <button type="submit">Vote for me</button>
      </div>
      </div>
      </div>
      

    </div>
    </>

  )
}

