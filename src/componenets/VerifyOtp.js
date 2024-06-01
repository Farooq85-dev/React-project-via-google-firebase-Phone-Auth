import OtpInput from 'react-otp-input';
import { Button } from 'antd';
export default function VerifyOtp() {
    const [otp, setOtp] = useState('');

    const verifyOtp = async () => {
        try {
            await status.confirm(otp);
            console.log('OTP verified successfully');
        } catch (err) {
            console.error('Error verifying OTP:', err);
        }
    };

    return (
        <div>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                shouldAutoFocus={true}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            <Button onClick={verifyOtp} style={{ marginTop: "10px" }} type="primary">Verify Otp</Button>
        </div>
    )
}
