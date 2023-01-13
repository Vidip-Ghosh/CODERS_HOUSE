import React,{useState} from 'react'
import Card from '../../../components/shared/Cards/Card'
import styles from "./StepOTP.module.css";
import 'react-phone-number-input/style.css'
import OtpInput from 'react-otp-input';


const StepOTPComponent = ({onNext}) => {
  const [OTP,setOTP] = useState("");
  function handleChange(OTP){
    setOTP(OTP);
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="🔒 Enter the code we just texted you">
      <div className={styles.otpElements}>
        <div className={styles.otp}>
          <OtpInput
            onChange={handleChange}
            value={OTP}
            inputStyle="inputStyle"
            numInputs={4}
            separator={<span></span>}
          />
        </div>
      </div>
        <div>
          <button onClick={onNext} className={styles.btn}>Next →</button>
        </div>
        <p className={styles.text}>
          By entering your number, you’re agreeing to our Terms of Services and Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  )
}

export default StepOTPComponent