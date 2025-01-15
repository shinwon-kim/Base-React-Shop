import React from "react";
import { Link } from "react-router-dom";
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({isOpen, onClose}: DrawerProps): JSX.Element => {

  return (
    <>
    <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none" }`}
        style={{ backdropFilter: isOpen ? "blur(3px)" : "none" }} onClick={onClose}>

      </div>
    <div className={`drawer-side ${isOpen ? "block" : "hidden"}`}>
      <label htmlFor="side-menu" className="drawer-overlay" onClick={onClose}></label>
      <ul className="menu w-80 h-screen p-4 overflow-y-auto text-black dark:text-white bg-white dark:bg-gray-700 flex flex-col">
        {/* 모바일 메뉴를 노출시켜 보세요. */}
        <li>
            <Link to="/fashion" className="text-inherit">패션</Link>
        </li>
        <li>
            <Link to="/accessory" className="text-inherit">액세서리</Link>
        </li>
        <li>
            <Link to="/digital" className="text-inherit">디지털</Link>
        </li>
      </ul>
    </div>
    </>
    
  );
};

export default Drawer;

