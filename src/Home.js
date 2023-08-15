import React,{useState} from 'react'
import Mcontent from './Mcontent'
import Header from './Header'
const Home = (props) => {
  const handleChange = (e)=>
  {
    console.log("In Home")
    console.log(e)
    props.handleChange(e);
  }
  return (
    <div>
    <Header />
    <Mcontent handleChange={handleChange}/>
    </div>
  )
}

export default Home
