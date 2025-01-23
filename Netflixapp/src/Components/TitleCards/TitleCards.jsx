import React, { useEffect } from 'react'
import './TitleCards.css'
import { useRef } from 'react'
import cards_data from '../../assets/cards/Cards_data'

function TitleCards({title,}) {

  const cardsRef =useRef();                                 //home page scroll bar setting start

  const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;
}

  useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel);
  },[])                                                       //home page scroll bar setting End

  return (
    <div className='title-cards'>
        <h2>{title? title:"Popular on Netflix"}</h2>

        <div className="card-list" ref={cardsRef}>
            {cards_data.map((card,index)=>{
                return <div className="card" key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCards