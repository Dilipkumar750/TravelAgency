import React from 'react'
import { Link } from 'react-router'
import face from '../assets/face1.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import Youtube from '../assets/Youtube.png'




const Footer = () => {
const year=new Date();

  return (
    <div className=' flex bg-black text-cyan-50 items-center gap-32' >
      <div className= ' mb-32 text-2xl pl-9' >
      <h1>Trxvl.</h1>
      </div>
      <div className='mt-10 text-sm  '>
      <ul className='space-y-3'>

        <li className=''><Link to='/' >Seslendirme Alt Jazz</Link></li>
        <li className=''><Link to='/' >Media Market</Link></li>
        <li className=''><Link to='/' >Gillie</Link></li>
        <li className=''><Link to='/' >Size Last</Link></li>
        <button className='border '>HelmetKOD</button>
        
          <p className=''>
        &copy; 2002-{year.getFullYear()} Netflix,lnc {"i-9897777788"}</p>
      </ul>



      </div>

      <div className='text-sm mb-14'>
        <ul className='space-y-3'>

        <li className=''><Link to='/' >Self Betimes</Link></li>
        <li className=''><Link to='/' >Yatirimci llikser</Link></li>
        <li className=''><Link to='/' >Basal Himmlatr</Link></li>
        </ul>
        
      </div>

      <div className='text-sm mb-14'>
        <ul className='space-y-3'>

        
      
        <li className=''><Link to='/' >Yard Market</Link></li>
        <li className=''><Link to='/' >Is Imkanlarn</Link></li>
        <li className=''><Link to='/' >Car Terchileria</Link></li>
        </ul>
      </div>
      <div className='text-sm mb-5'>
        <ul className='space-y-3'>

        
      
        <li className=''><Link to='/' >Autumnal Bulgier</Link></li>
        <li className=''><Link to='/' >Hedge Karla</Link></li>
        <li className=''><Link to='/' >Mullein Kosullar</Link></li>
        
      </ul>
    
      <div className='flex '>
<Link to='https://facebook.com'><img src={face} alt='face' width={'40px'}/></Link>
      <Link to='https://instagram.com'> <img src={insta} alt='face' width={'40px'}/></Link>
      <Link to='https://twitter.com'> <img src={twitter} alt='face' width={'40px'}/></Link>
      <Link to='https://youtube.com'> <img src={Youtube} alt='face' width={'40px'}/></Link>
      </div>
      </div>
        </div>
    
  
  )
}

export default Footer
