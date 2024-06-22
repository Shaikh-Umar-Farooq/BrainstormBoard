import React from 'react'
import IdeaItem from './IdeaItem'

function IdeaList({idealist,reFreshData}) {
  return (
    <div>
        {idealist.map((idea,index)=>(
            <IdeaItem idea={idea} key={index} reFreshData={reFreshData}/>
        ))    
        }
    </div>
  )
}

export default IdeaList