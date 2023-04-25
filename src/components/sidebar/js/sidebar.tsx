import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sidebarstyle.css";
import { FaHome, FaStar, FaStickyNote, FaTasks, FaBookOpen, FaTag, FaShareAltSquare, FaTrash, FaToolbox, FaPlus, FaAngleDown } from "react-icons/fa";
import NewSidebar from './NewSidebar';

const Sidebar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      // If the active element exists and is clicked outside of
      // If the active element exists and is clicked outside of
      console.log(isActive);
  if (dropdownRef.current !== null && dropdownRef.current!=e.target) {
    setIsActive(!isActive);
  }
    };

    console.log(isActive)
     // If the item is active (ie open) then listen for clicks
  if (isActive) {
    window.addEventListener('click', pageClickEvent);
  }

  return () => {
    window.removeEventListener('click', pageClickEvent);
  }

  }, [isActive]);

  return (
        <div>

<div className='navcomponent '>  
<div className='newevernote navigation-container' onClick={onClick} ref={dropdownRef} >
<FaPlus/>
New  
<div className='newevernote-dropdown'><FaAngleDown/></div>
</div>
</div>
{isActive ? <NewSidebar/> : <div>mello</div>}

<div>            
<div className="navigation-container"><FaHome/>Home</div>
<div className="navigation-container"><FaStar/>Shortcuts</div>
<div className="navigation-container"><FaStickyNote/>Notes</div>
<div className="navigation-container"><FaTasks/>Tasks</div>
</div>

<div className='navcomponent'>            
<div className="navigation-container"><FaBookOpen/>Notebook</div>
<div className="navigation-container"><FaTag/>Tags</div>
<div className="navigation-container"><FaShareAltSquare/>Shared with Me</div>
</div>

<div className='navcomponent'>            
<div className="navigation-container"><FaTrash/>Trash</div>
</div>
        </div>
    )
}

export default Sidebar
