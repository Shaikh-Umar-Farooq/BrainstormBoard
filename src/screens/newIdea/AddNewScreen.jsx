import React, { useEffect, useState } from 'react'
import Header from '../home/components/header'
import { ChevronLeft, Info, Pin } from 'lucide-react'
import { db } from '../../../utils';
import { Ideas } from '../../../utils/schema';
import { useNavigate } from 'react-router-dom';

function AddNewScreen() {

  const navigation =useNavigate();

  const [idea, setIdea] = useState();
  const [username, setUsername] = useState();
  const[showalert,setShowAlert]=useState(false);
  const[existingUser,setExistingUser]=useState(false);

  useEffect(() => {
    if(localStorage.getItem('username')){
      setUsername(localStorage.getItem('username'));
      setExistingUser(true);
    }
  }, [])


  const onSavehandler = async () => {
    const result = await db.insert(Ideas).values({
      content: idea,
      username: username,
      created_at: new Date().toISOString()
    }).returning({ id: Ideas.id })

    if (result) {
      localStorage.setItem('username', username);
      setIdea('');
      setUsername('');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }

  }

  return (
    <div  className=' h-screen' >
      <Header />

      {showalert&&<div role="alert" className="alert alert-success mt-5 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span> Your idea has been listed successfully!</span>
      </div>}

      <button className=' btn mt-7 ' onClick={()=> navigation('/') } >
        <ChevronLeft />
        back
      </button>
      <h2 className=' font-bold text-lg mt-5 text-center ' >Share your innovative idea and see how it resonates with the community.</h2>

      <div className=' flex flex-col mt-7 gap-2 ' >
        <label className='font-bold' > Your Idea</label>
        <textarea value={idea} onChange={(event) => setIdea(event.target.value)} className="textarea textarea-bordered" placeholder="Describe your idea here..."></textarea>
      </div>
      {!existingUser&&<div className=' flex flex-col mt-7 gap-2 ' >
        <label className='font-bold flex justify-between' > Your Username
          <span className=' font-thin flex items-center gap-2 text-xs' > <Info className=' h-3 w-3' /> No account needed!</span>
        </label>
        <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" className="input input-bordered w-full" />
      </div>}

      <button className=' btn w-full btn-primary mt-7'
        disabled={!(idea && username)}
        onClick={() => onSavehandler()} >

        <Pin className=' h-4 w-4' />
        List my Idea

      </button>
     

    </div>
  )
}

export default AddNewScreen