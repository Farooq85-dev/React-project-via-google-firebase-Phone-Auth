import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SendOtp from './Sendotp';
import Welcome from './Welcome';
import VerifyOtp from './VerifyOtp';

function RouterCmp() {
    return (
        <div className="App">
            <Routes>
                <Route path="/sendotp" element={<SendOtp />} />
                <Route path="/verifyotp" element={<VerifyOtp />} />
                <Route path="/" element={<Welcome />} /> {/* Default route */}
            </Routes>
        </div>
    );
}
export default RouterCmp;