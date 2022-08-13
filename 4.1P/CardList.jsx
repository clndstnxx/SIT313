import React from 'react'
import Card from './Card'
import faker from 'faker'
import staffList from './staffList'
import './Card.css'

function cardComponent (staff , i){
    return <Card 
    key = {staff.key}
    title ={staff.title}
    avatar = {staff.avatar}
    username = {staff.username}
    desc = {staff.desc}
  />
}


const CardList = () =>
{  
    return <div className="row">
    {staffList.map(  (staff ) => 
      <Card 
    key = {staff.key}
    title = {staff.title}
    avatar = {staff.avatar}
    desc = {staff.desc}
    username = {staff.username}
  />
)}
     
    </div>
}

export default CardList