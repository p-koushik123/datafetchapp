import React from 'react'
import Person1 from './Person1'
export default function PersonList() {
    const PersonList = [
        {
           id : 1,
           Name : 'Rakesh',
           Age : 20,
           Skill : 'Python'
        },
        {
            id : 2,
            Name : 'Kishore',
            Age : 22,
            Skill : 'React'
         },
         {
            id : 3,
            Name : 'Sarath',
            Age : 23,
            Skill : 'Node js'
         },
         {
            id : 4,
            Name : 'Kiran',
            Age : 25,
            Skill : 'MongoDB'
         },
    ]
  return (
    <div>
      {
        PersonList.map(person => 
          <h2 key={person.id}><Person1 personDetails={person} /></h2>)
      }
    </div>
  )
}
