import React,{useState} from 'react'
import StepPhoneEmailComponent from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTPComponent from '../Steps/StepOTP/StepOTP' 
const steps = {
  1: StepPhoneEmailComponent,
  2: StepOTPComponent
};
const Login = () => {
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

export default Login
