import React,{useContext,useEffect,useState}from 'react';
import { useNavigate} from "react-router-dom";
import useFetch from './useFetch';
import { AppContext } from "../App";
import axios from 'axios';

const Card=()=>{
  const [neighbr,setNeighbr]=useState("")
  
  const {location}=useContext(AppContext);
  const redirect=useNavigate();
  console.log(location)
  
  const {data,neighbour,loading,error}=useFetch(`https://restcountries.com/v2/name/${location}?fullText=true`);
  useEffect(
    ()=>{
      axios.get(`https://restcountries.com/v2/alpha/${neighbour}?fullText=true`)
      .then(
        response=>{setNeighbr(response.data)}
      )
    },[neighbour]
  )
  
  let renderContent=null;
  if (error){
    renderContent=
      <ul className="dis-box">
          <p 
          className="back-home"
          onClick={()=>{redirect('/', {replace:true})}}
          >✕</p>
          <div className='error'>
            <h3>An error occurred !</h3>
            <h4> back to homepage and enter in a COUNTRY name ! 😊</h4>
          </div>
     </ul>}else if(loading){
    renderContent=<p>Loading</p>}else{
    renderContent=
    <ul className="dis-box">
        <p 
        className="back-home"
        onClick={()=>{redirect('/', {replace:true})}}
        >✕</p>
        <li>{data.name}'s Neighbour</li>
        <li>
          <h2 className="neighbrname">{neighbr.name}</h2>
          <div className="capital">{neighbr.capital}</div>
        </li>
        <li>
            <h2 className="population">🧑‍🤝‍🧑{neighbr.population}</h2>
        </li>
          <li ><img className="flag" src={neighbr.flag } alt="flagpic"/></li>
        <li>
          <div >{neighbr.subregion}</div>
        </li> 
        <li><p>{neighbr.timezones}</p></li>
    </ul>
  }
  
  
    return(
        <div className="display">
          {renderContent}
        </div>
    )
  }
  
  export default Card;