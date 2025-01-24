import React from 'react'
import { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

function Player() {
  const [apiData,setApiData]=useState({name:"",key:"",published_at:"",type:""})
  const  {id} = useParams();
  const navigate=useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWQzYjU1NGFjOWIyYjNmZmNjNTc5OTRmMTg4Yzg1OCIsIm5iZiI6MTczNzYzOTQxMi40NjU5OTk4LCJzdWIiOiI2NzkyNDVmNDIxMDQ4ZTlmNThmYTdlNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cIdIkuXeD_AUWM-m8OzXO5IkB07lKU-RQrTa781ZRZI'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])
  
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>

      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'  width='90%'  height='90%' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.split(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player