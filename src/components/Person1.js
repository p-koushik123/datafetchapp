import React from 'react'

export default function Person1({personDetails}) {
  return (
        <div>
      Hai I am {personDetails.Name}. 
      My Age is:{personDetails.Age}. 
      My Skill is:{personDetails.Skill}
    </div>
    
  )
}
