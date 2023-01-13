import React,{useState} from 'react'
import Card from '../../../components/shared/Cards/Card'
import styles from "./StepPhoneEmail.module.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const StepPhoneEmailComponent = ({onNext}) => {
  const [value,setValue] = useState();
  return (
    <div className={styles.cardWrapper}>
      <Card title="☎️ Enter your phone number">
        <PhoneInput placeholder="Enter phone number" value={value} onChange={setValue}/>
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

export default StepPhoneEmailComponent