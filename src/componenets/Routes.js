import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfirmationProvider } from './Confirmation';
import { Toaster } from 'react-hot-toast';
import SendOtp from './Sendotp';
import Welcome from './Welcome';
import VerifyOtp from './VerifyOtp';

function RouterCmp() {
    return (
        <div className="App">
            <ConfirmationProvider>
                <Toaster />
                <Routes>
                    <Route path="/sendotp" element={<SendOtp />} />
                    <Route path="/verifyotp" element={<VerifyOtp />} />
                    <Route path="/" element={<Welcome />} /> {/* Default route */}
                </Routes>
            </ConfirmationProvider>
        </div>
    );
}
export default RouterCmp;