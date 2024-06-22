import { Sparkle, Trophy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Tab() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.hash === '#new') return 0;
    if (location.hash === '#top') return 1;
    return 0; // Default to top ideas if no hash is present
  });

  useEffect(() => {
    if (location.hash === '#new') {
      setActiveTab(0);
    } else if (location.hash === '#top') {
      setActiveTab(1);
    } else {
      setActiveTab(0); // Default to top ideas if no hash is present
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
        <Sparkle className='w-4 h-4' /> &nbsp; New Ideas
      </a>
      <a
        onClick={() => setActiveTab(1)}
        role="tab"
        href="/#top"
        className={`tab text-lg font-bold ${activeTab === 1 && 'tab-active'}`}
      >
        <Trophy className='w-4 h-4' /> &nbsp; Top Ideas
      </a>
    </div>
  );
}

export default Tab;
