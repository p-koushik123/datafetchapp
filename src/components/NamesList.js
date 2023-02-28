import React from 'react'

export default function NamesList() {
    const nameList = ['Raja', 'Kishore','Sarath','Kiran']
  return (
    <div>
      {
nameList.map((name,index) => <h2 key={index}>{index} {name}</h2>)
      }
    </div>
  )
}
