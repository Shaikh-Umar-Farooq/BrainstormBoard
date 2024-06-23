import React from 'react';
import IdeaList from './idealist';

function UserIdeasList({ username, userIdeas, fetchIdeas }) {
  if (!username) {
    return (
      <div className='p-5 text-center'>
        You either haven't listed any ideas or you have cleared site data.
      </div>
    );
  }

  return userIdeas.length > 0 ? (
    <IdeaList idealist={userIdeas} reFreshData={() => fetchIdeas(username)} isUserIdea />
  ) : (
    <div className='p-5 text-center'>
        
        <span className='font-bold'> Dear, {username} </span> <br />
    You have not listed any ideas.</div>
  );
}

export default UserIdeasList;
