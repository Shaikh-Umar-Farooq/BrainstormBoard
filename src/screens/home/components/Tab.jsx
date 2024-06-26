import { Sparkle, Trophy, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Tab() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.hash === '#new') return 0;
    if (location.hash === '#top') return 1;
    if (location.hash === '#my') return 2;
    return 0; // Default to new ideas if no hash is present
  });

  useEffect(() => {
    if (location.hash === '#new') {
      setActiveTab(0);
    } else if (location.hash === '#top') {
      setActiveTab(1);
    } else if (location.hash === '#my') {
      setActiveTab(2);
    } else {
      setActiveTab(0); // Default to new ideas if no hash is present
    }
  }, [location.hash]);

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <a
        onClick={() => setActiveTab(0)}
        role="tab"
        href="/#new"
        className={`tab text-lg font-bold ${activeTab === 0 && 'tab-active'}`}
      >
        <Sparkle className='w-4 h-4' /> &nbsp; 
        <span className="hidden sm:inline">New Ideas</span>
        <span className="sm:hidden">New</span>
      </a>
      <a
        onClick={() => setActiveTab(1)}
        role="tab"
        href="/#top"
        className={`tab text-lg font-bold ${activeTab === 1 && 'tab-active'}`}
      >
        <Trophy className='w-4 h-4' /> &nbsp; 
        <span className="hidden sm:inline">Top Ideas</span>
        <span className="sm:hidden">Top</span>
      </a>
      <a
        onClick={() => setActiveTab(2)}
        role="tab"
        href="/#my"
        className={`tab text-lg font-bold ${activeTab === 2 && 'tab-active'}`}
      >
        <User className='w-4 h-4' /> &nbsp; 
        <span className="hidden sm:inline">My Ideas</span>
        <span className="sm:hidden">Listed</span>
      </a>
    </div>
  );
}

export default Tab;
