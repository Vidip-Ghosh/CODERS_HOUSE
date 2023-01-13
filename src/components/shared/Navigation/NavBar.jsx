import React from 'react'
import { useNavigate } from 'react-router';
import styles from './Navigation.module.css';

const NavBar = () => {
  const navigate = useNavigate();
  const brandStyle = {
    fontSize: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px'
  }
  return (
    <div onClick={()=>{
        navigate('/')
      }}>
      <nav className={`${styles.navbar} container`}>
          <span style={brandStyle}>👋 Codershouse</span>
      </nav>
    </div>
  )
}

export default NavBar;