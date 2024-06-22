import React, { useContext } from 'react'
import { ThemeContext } from './../../../context/themecontext.jsx'

function hero() {
    const { theme,setTheme } = useContext(ThemeContext)
  return (
    <div className='my-10 flex flex-col items-center gap-5'>
        <h2 className='text-2xl font-bold text-center '>Discover, Share, and Vote on Ideas Freely.</h2>
        <h2 className=' text-sm font-thin text-justify '>Discover Brainstorm Board, a platform dedicated to the free exchange of ideas. List your innovative project or startup concepts, explore ideas from other users, and cast your votes anonymously. Our goal is to create a collaborative space where ideas can grow and improve through community input, all without the need for account creation.</h2>
    
    <div>

  

    <select 
    onChange={(event)=> setTheme(event.target.value) }
    className="select select-bordered w-full max-w-xs">
        <option disabled selected >Select Theme</option>
        <option >light</option>
        <option>dark</option>
        <option>cupcake</option>
        <option >bumblebee</option>
        <option>emerald</option>
        <option>corporate</option>
        <option>synthwave</option>
        <option>retro</option>
        <option>cyberpunk</option>
        <option>valentine</option>
        <option>halloween</option>
        <option>garden</option>
        <option>forest</option>
        <option>aqua</option>
        <option>lofi</option>
        <option>pastel</option>
        <option>fantasy</option>
        <option>wireframe</option>
</select>
    </div>
    
    </div>
  )
}

export default hero