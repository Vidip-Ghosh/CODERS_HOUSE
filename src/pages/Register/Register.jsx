import React,{useState} from 'react'
import styles from './Register.module.css'
import StepPhoneEmailComponent from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTPComponent from '../Steps/StepOTP/StepOTP' 
import StepNameComponent from '../Steps/StepName/StepName'
import StepAvatarComponent from '../Steps/StepAvatar/StepAvatar'
import StepUserNameComponent from '../Steps/StepUserName/StepUserName'

const steps = {
  1: StepPhoneEmailComponent,
  2: StepOTPComponent,
  3: StepNameComponent,
  4: StepAvatarComponent,
  5: StepUserNameComponent
};

const Register = () => {
  const [step,setStep]  = useState(1);
  const Step = steps[step];
  function onNext()
  {
    setStep(step+1);
  }
  return (
    <div>
      <Step onNext={onNext}/>
    </div>
  )
}

export default Register