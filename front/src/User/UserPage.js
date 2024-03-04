import React from 'react';
import './UserPage.sass';

function UserPage({ children }) {
    return (
        <div className="content">
            <div className="triangle top-left"></div>
            <div className="triangle top-right"></div>
            <div className="circle bottom-left"></div>
            <div className="circle bottom-right"></div>
            {children}
        </div>
    );
}

export default UserPage;
