import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Card from "../../components/shared/Cards/Card";
import styles from "./Home.module.css";
import Button from "../../components/shared/Button/Button";
const Home = () => {
  const navigate = useNavigate();
  function startRegister(){
    navigate('/register')
    console.log('button clicked');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="👋 Welcome to Codershouse!">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div>
          <Button onClick={startRegister} text="Get Your Username"/>
        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={{color:'0077FF',fontWeight:'bold',textDecoration:'none',marginLeft:'20px'}} to="/login">Sign In</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
