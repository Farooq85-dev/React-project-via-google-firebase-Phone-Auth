import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { MdMessage } from 'react-icons/md';
import { useConfirmation } from './Confirmation';
import toast from 'react-hot-toast';
import '../App.scss'

function VerifyOtp({ data }) {
    const [otp, setOtp] = useState('');
    const { confirmation } = useConfirmation();

    const verifyOtp = async () => {
        try {
            if (confirmation) {
                await confirmation.confirm(otp);
                toast.success('Congratulations! OTP Verified Successfully.');
            } else {
                toast.error('OOPS! No OTP Found.');
            }
        } catch (err) {
            toast.error('OOPS! Please Try Again.');
        }
    };

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
                <button onClick={verifyOtp}>Verify Otp</button>
            </div>
        </div>
    )
}
export default VerifyOtp;