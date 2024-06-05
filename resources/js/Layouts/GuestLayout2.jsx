import React from "react";

const GuestLayout2 = ({ children }) => {
    return (
        <div className="h-screen flex justify-center">
            <div className="max-w-md w-full mx-auto p-4">
                {children}
            </div>
        </div>
    );
};

export default GuestLayout2;