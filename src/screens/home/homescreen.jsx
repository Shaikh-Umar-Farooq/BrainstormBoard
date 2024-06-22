import React, { useEffect, useState } from 'react'
import Header from './components/header' // Importing the Header component from the components folder
import Hero from './components/hero' // Importing the Hero component from the components folder
import Tab from './components/Tab'
import { useLocation } from 'react-router-dom'
import { db } from '../../../utils'
import { Ideas } from '../../../utils/schema'
import { desc, param } from 'drizzle-orm'
import IdeaList from './components/idealist'

function homescreen() {
  const params=useLocation();
  const[idealist,setIdeaList]=useState([]);

useEffect(() => {
  GetAllIdeas();
}, [params])
const GetAllIdeas=async()=>{
  const result = await db.select().from(Ideas)
  .orderBy(desc(params.hash==='#top'? Ideas.vote:Ideas.id))
  .limit(20);

  console.log(result);
  setIdeaList(result); 
}

  return (
    <div >
        <Header />
        <Hero />
        <Tab  />
        <IdeaList idealist={idealist} reFreshData={GetAllIdeas()} />
    </div>
  )
}

export default homescreen