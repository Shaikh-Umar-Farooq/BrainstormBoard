import React from 'react'
import IdeaItem from './IdeaItem'

function IdeaList({ idealist, reFreshData, isUserIdea }) {
  return (
    <div>
      {idealist.map(idea => (
        <IdeaItem key={idea.id} idea={idea} reFreshData={reFreshData} isUserIdea={isUserIdea} />
      ))}
    </div>
  );
}

export default IdeaList