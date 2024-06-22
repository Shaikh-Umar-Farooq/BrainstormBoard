import React from 'react';
import logo from './../../../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigation = useNavigate();
  const location = useLocation();
  const isOnNewPage = location.pathname === '/new';

  return (
    <div className='flex flex-row justify-between items-center shadow-sm p-4 border rounded-lg'>
      <div className='flex gap-2 items-center'>
        <img src={logo} className='w-20 h-20' alt='logo' />
      </div>
      <h2 className='font-bold text-sm md:text-3xl'>Brainstorm Board</h2>
      {!isOnNewPage ? (
        <button className='btn btn-primary btn-sm md:btn-md' onClick={() => navigation('/new')}>
          + New Idea
        </button>
      ) : (
        <div className='w-20 h-8'></div> // Placeholder element
      )}
    </div>
  );
}

export default Header;
