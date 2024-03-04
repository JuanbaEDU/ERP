import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User } from './User';
import './UserDetail.sass';

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        
    const fetchUser = async () => {
        try {
            const response = await fetch('http://localhost:3003/api/user/mongo/' + id);
            const data = await response.json();
            const userInstances = new User(data);
            setUser(userInstances);
            console.log(userInstances);
        } catch (error) {
            console.error('Error al cargar users:', error);
        }
    };

        fetchUser();
    }, [id]); 

    const handleClick = () => {
        navigate(`/users`);
    };

    if (!user) {
        return <div>Cargando el usercon el id {id}... </div>;
    }
    return (
        <div>
            <div className="user-details respirable">
                <div className="user-image-container">
                    <img src={user.Image} alt={user.Name} className="user-image" />
                    <div className="user-id">ID / {user.Id}</div>
                </div>
                <div className="user-info-container">
                    <div className="user-info">
                        <h2>{user.Name}</h2>
                        <p><span className={"type " + user.Type1}><b>{user.Type1.toUpperCase()}</b> </span> <span className={"type " + user.Type2}><b>{user.Type2.toUpperCase()}</b></span></p>
                        <div className='evolution-container'>
                            {user.EvolutionFrom ? (
                                <p className='evolution'>Evoluciona de: <br /> <b> {user.EvolutionFrom} </b></p>
                            ) : (
                                <p className='evolution'><b> Forma base</b> </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className='back-to-list' onClick={handleClick}>Volver al listado</button>
        </div>
    );
};

export default UserDetails;