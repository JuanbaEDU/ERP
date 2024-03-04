import React from 'react';
import './UserPage.sass';

function UserPage({ children }) {
    return (
        <div className="content">

            {children}
        </div>
    );
}

export default UserPage;
