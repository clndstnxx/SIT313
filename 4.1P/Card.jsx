import React from 'react'
import './Card.css'

const Card = (props) =>
{
    return <div className='column'>
    <img src={props.avatar} alt="staff" />
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    <h2>--------------------</h2>
    <h4>{"⭐️5 "+props.username}</h4>
    </div>
}

export default Card