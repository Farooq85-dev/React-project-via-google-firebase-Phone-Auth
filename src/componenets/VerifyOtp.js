import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { MdMessage  } from 'react-icons/md';
import '../App.scss'

export default function VerifyOtp() {
    const [otp, setOtp] = useState('');

    // const verifyOtp = async () => {
    //     try {
    //         await status.confirm(otp);
    //         console.log('OTP verified successfully');
    //     } catch (err) {
    //         console.error('Error verifying OTP:', err);
    //     }
    // };

    return (
        <div className='mainVerifyOtp'>
            <div className='verifyOtpContainer'>
                <h4>Please! Enter OTP</h4>
                <MdMessage className='icon' />
                <OtpInput inputStyle={
                    {
                        width: "25px",
                        height: "25px",
                    }
                }
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    shouldAutoFocus={true}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
                <button >Verify Otp</button>
            </div>
        </div>
    )
}
