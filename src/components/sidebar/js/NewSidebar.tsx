import React from "react";
import "../css/newsidebarstyle.css";
import { FaHome, FaStar, FaStickyNote, FaTasks, FaBookOpen, FaTag, FaShareAltSquare, FaTrash, FaToolbox, FaPlus, FaAngleDown } from "react-icons/fa";


const NewSidebar = ()=> {

    return (
        <div className="dropdown">
            <div className="dropdown-container">            
<div className="create-new create-new-task"><FaStickyNote/>Note</div>
<div className="create-new create-new-note"><FaTasks/>Task</div>
<div className="create-new"><FaStickyNote/>Attachment</div>
<div className="create-new"><FaTasks/>Sketch</div>
</div>
        </div>
    )
}


export default NewSidebar;