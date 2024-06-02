import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { MdOutlineMobileFriendly } from "react-icons/md";
import { auth } from "../firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useConfirmation } from './Confirmation';
import '../App.scss';
import toast from 'react-hot-toast';

function SendOtp() {
    const navigate = useNavigate();
    const [num, setNum] = useState('');
    const { setConfirmation } = useConfirmation();

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
            const confirmation = await signInWithPhoneNumber(auth, num, recaptcha);
            toast.success('Congratulations! Please Check Your Inbox.');
            setConfirmation(confirmation);
            navigate('/verifyotp');
        } catch (err) {
            toast.error('OOPS! Please Try Again.');
        }
    }
    return (
        <div className="mainSendOtp">
            <div className='sendOtpContainer'>
                <h4>Welcome to Phone Authentication</h4>
                <MdOutlineMobileFriendly className='icon' />
                <PhoneInput
                    country={'pk'}
                    value={num}
                    onChange={(num) => setNum("+" + num)}
                />
                <div id='recaptcha'>
                </div>
                <button onClick={sendOtp} >SEND OTP</button>
            </div>
        </div >
    )
}

export default SendOtp;

