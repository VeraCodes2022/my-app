import React,{useContext} from 'react'; 
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

function Form() {

  const {location,setLocation}=useContext(AppContext);
  const redirect=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!location){
    alert("please enter in a country name")
    }else{
        redirect('/display',{replace:true})
    }
    
}


  return (
    <form
      className="main"
      onSubmit={handleSubmit}
      onClick={(e)=>{ e.stopPropagation()}}
    >
      <div className='wrapper'>
          <input 
          type='text'
          className='searchbox common'
          placeholder='  Please Enter in a Country Name'
          value={location}
          onChange={(e)=>{setLocation(e.target.value)}}
          />
          <button
          className="btn common"
          >Check Neighbour Info</button>
      </div>
    </form>
  )
}

export default Form