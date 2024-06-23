import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Tab from './components/Tab';
import { useLocation } from 'react-router-dom';
import { db } from '../../../utils';
import { Ideas } from '../../../utils/schema';
import { desc, eq } from 'drizzle-orm';
import IdeaList from './components/idealist';
import UserIdeasList from './components/UserIdeasList';

function HomeScreen() {
  const location = useLocation();
  const [idealist, setIdeaList] = useState([]);
  const [userIdeas, setUserIdeas] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
    fetchIdeas(storedUsername);
  }, [location]);

  const fetchIdeas = async (storedUsername) => {
    if (location.hash === '#top') {
      const result = await db.select()
        .from(Ideas)
        .orderBy(desc(Ideas.vote))
        .limit(20);
      setIdeaList(result);
    } else if (location.hash === '#my') {
      if (storedUsername) {
        const result = await db.select()
          .from(Ideas)
          .where(eq(Ideas.username, storedUsername))
          .orderBy(desc(Ideas.id))
          .limit(20);
        setUserIdeas(result);
      }
    } else {
      const result = await db.select()
        .from(Ideas)
        .orderBy(desc(Ideas.id))
        .limit(20);
      setIdeaList(result);
    }
  };

  return (
    <div>
      <Header />
      <Hero />
      <Tab />
      {location.hash === '#my' ? (
        < UserIdeasList
          username={username}
          userIdeas={userIdeas}
          fetchIdeas={fetchIdeas}
        />
      ) : (
        <IdeaList
          idealist={idealist}
          reFreshData={fetchIdeas}
        />
      )}
    </div>
  );
}

export default HomeScreen;
