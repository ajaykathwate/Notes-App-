import React, {useState} from 'react';

import PlusIcon from '../Images/add.png';
import TrashIcon from '../Images/trash.png';
import './sidebar.css';

const Sidebar = (props) => {

  const [listOpen, setListOpen] = useState(false);

  const colors = ["#fe9b72", "#fec971", "#b693fd", "#00d4fd", "#e4ee91"]

  return (
    <div className="sidebar"  >
      <img src={PlusIcon} alt="Add" onClick={()=>setListOpen(!listOpen)} />
      <ul className={`sidebar-list ${listOpen?"sidebar-list-active":""}`}>
        {
          colors.map((item, index) => <li 
          key={index}
          className="sidebar-list-item"
          style={{backgroundColor:`${item}`}}
          onClick={()=>props.addNote(item)}
          ></li>)
        }
      </ul>
    </div>
  )
}

export default Sidebar