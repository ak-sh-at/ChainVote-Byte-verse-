import React from 'react'
import Content from './Content'
import items from "./data";
const Mcontent = (props) => {
  const handleChange=(e)=>
  {
    console.log("In Mcontent")
    props.handleChange(e);
  }
  return (
    <div className='row'>
        {Array.from(items).map(function elements(val){
          
            return(
                <div className='col-lg-4 col-md-6'>
                  <Content
                  image={val.image}
                  title={val.title}
                  name1={val.candiName1}
                  cimage1={val.candiLogo1}
                  name2={val.candiName2}
                  cimage2={val.candiLogo2}
                  
                  handleChange ={handleChange}
                  />
                </div>
            )
        })}
    </div>
  )
}

export default Mcontent