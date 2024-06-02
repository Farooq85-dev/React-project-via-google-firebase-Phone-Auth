import React, { createContext, useState, useContext } from 'react';

const ConfirmationContext = createContext();

export const useConfirmation = () => useContext(ConfirmationContext);

export const ConfirmationProvider = ({ children }) => {
    const [confirmation, setConfirmation] = useState(null);

    return (
        <ConfirmationContext.Provider value={{ confirmation, setConfirmation }}>
            {children}
        </ConfirmationContext.Provider>
    );
};
