import '../App.scss';
import { useNavigate } from 'react-router-dom';
import MyImage from '../images/aleksey-kashmar-DJyyREYI9vw-unsplash.jpg';
import { RiRestartFill } from "react-icons/ri";
    
export default function Welcome() {
    const navigate = useNavigate();
    const navigateToSignin = () => {
        navigate('/sendotp');
    };
    return (
        <div className="mainWelcome">
            <div className='welcomeContainer'>
                <RiRestartFill className="icon" />
                <button onClick={navigateToSignin}>Start</button>
            </div>
        </div>
    )
}
