import React from 'react'
import items from "./data";
import { useAuth0 } from "@auth0/auth0-react";
import {Routes,Route,useNavigate} from 'react-router-dom';
import Votepage from './Votepage';
const Content = (props) => {
  const { isAuthenticated} = useAuth0();
  const navigate= useNavigate();
  const navigateToVotingPage=()=>{
    console.log("In nagivate to voting page")
    const obj = {
      title:props.title,
      imgUrl:props.image,
      name1:props.name1,
      cimage1:props.cimage1,
      name2:props.name2,
      cimage2:props.cimage2,
    }
    props.handleChange(obj)
    navigate('/Votepage');
  };
  return (
    <div className="mcont">
      <div className="cont">
        <div className="img">
        <img src={props.image} alt="image" width="398px" height="350px" />
        </div>
        <div className="info">{props.title}</div>
        {isAuthenticated?<button onClick={navigateToVotingPage} className="vote">Vote Now</button>:null}
        
        
      </div>
    </div>
  )
}

export default Content