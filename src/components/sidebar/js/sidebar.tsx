import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sidebarstyle.css";
import { FaHome, FaStar, FaStickyNote, FaTasks, FaBookOpen, FaTag, FaShareAltSquare, FaTrash, FaToolbox, FaPlus, FaAngleDown } from "react-icons/fa";
import NewSidebar from './NewSidebar';
import { DetectOutsideClick } from '../../common/DetectOutsideClick';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);


  return (
        <div>

<div className='navcomponent '>  
<div className='newevernote navigation-container' onClick={onClick} ref={dropdownRef} >
<FaPlus/>
New  
<div className='newevernote-dropdown'><FaAngleDown/></div>
</div>
</div>
{isActive ? <NewSidebar/> : <div></div>}

<div>            
<div><NavLink className="navigation-container" to={'/home'}><FaHome/>Home</NavLink></div>
<div><NavLink className="navigation-container" to={'/shortcuts'}><FaStar/>Shortcuts</NavLink></div>
<div><NavLink className="navigation-container" to={'/notes'}><FaStickyNote/>Notes </NavLink></div>
<div><NavLink className="navigation-container" to={'/tasks'}><FaTasks/> Tasks </NavLink></div>
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
