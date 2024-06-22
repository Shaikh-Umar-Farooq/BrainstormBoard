import { Sparkle, Trophy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Tab() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.hash === '#new' ? 0 : 1);

  useEffect(() => {
    setActiveTab(location.hash === '#new' ? 0 : 1);
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
