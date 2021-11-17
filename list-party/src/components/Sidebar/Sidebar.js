import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import mainicon from "./party-popper.png";
import "./Sidebar.css";

function Sidebar({sidebar, showSidebar}) {
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <ul>
        <div className={sidebar ? "MainIcon active" : "MainIcon"} onClick={showSidebar}>
          <img className="Icon" src={mainicon} alt="Party"></img>
        </div>
        {SidebarData.map((item) => {
          return (
            <li class="list">
              <Link to={item.path} onClick={sidebar ? "" : showSidebar}>
                <span class="icon">
                  <ion-icon name={item.icon}></ion-icon>
                </span>
                <span className={sidebar ? "title active" : "title"}>
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
