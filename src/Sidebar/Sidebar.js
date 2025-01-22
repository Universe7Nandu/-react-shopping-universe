// import Category from "./Category/Category";
// import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
// import "./Sidebar.css";

// const Sidebar = ({ handleChange }) => {
//   return (
//     <>
//       <section className="sidebar">
//         <div className="logo-container">
//         <u><b><h1>🛒Nandu'sCart</h1></b></u> 
//         </div>
//         <Category handleChange={handleChange} />
//         <Price handleChange={handleChange} />
//         <Colors handleChange={handleChange} />
//       </section>
//     </>
//   );
// };

// export default Sidebar;


//newly Modified
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Recommended for smooth animations
import { 
  FaFilter, 
  FaTimes, 
  FaBars 
} from 'react-icons/fa'; // Using react-icons for better icons
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <motion.section 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="sidebar-close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </div>

        <div className="logo-container">
          <motion.h1 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🛒 Nandu's Cart
          </motion.h1>
        </div>

        <div className="sidebar-content">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </motion.section>
    </>
  );
};

export default Sidebar;
