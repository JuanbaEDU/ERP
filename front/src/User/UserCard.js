import React, { useState } from 'react';
import './UserCard.sass';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            navigate(`/user/${user.email}`);
        }, 400);
    };

    return (
        <div className={`user-card ${isActive ? 'user-card-active' : ''}`} onClick={handleClick}>
            <div className="user-image-container">
                {/* <img src={user.Image} alt={user.Name} className="user-image" /> */}
                <div className="user-id">Email / {user.Email}</div>
            </div>
            <div className="user-info-container">
                <div className="user-info">
                    <h2>{user.Email}</h2>
                    {/* {/* <p><span className={"type " + user.Type1}><b>{user.Type1.toUpperCase()}</b> </span> <span className={"type " + user.Type2}><b>{user.Type2.toUpperCase()}</b></span></p>
                    <div className='evolution-container'>
                        {user.EvolutionFrom ? (
                            <p className='evolution'>Evoluciona de: <br /> <b> {user.EvolutionFrom} </b></p>
                        ) : (
                            <p className='evolution'><b> Forma base</b> </p>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default UserCard;