import React, { useState, useEffect, useCallback } from 'react';
import './UserList.sass';
import { User } from './User';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = useState('');

    const fetchAndFilterUsers = useCallback(async () => {
        let url = 'http://localhost:3003/api/user/';
            url += filterText ? `filter/${filterText}` : 'list';

        try {
            const response = await fetch(url);
            const data = await response.json();
            const userInstances = data.map(item => new User(item));
            setUsers(userInstances);

        } catch (error) {
            console.error('Error:', error);
        }
    }, [filterText]);

    useEffect(() => {
        fetchAndFilterUsers();
    }, [fetchAndFilterUsers]);

    const handleChange = (event) => {
        const { value, type } = event.target;

        if (type === 'text') {
            setFilterText(value);
        }
    };

    return (
        <div className="list">
            <input className='filtro' name="filter" type="text" placeholder="Filtra usuarios por email" onChange={handleChange} />
            <div className='user-grid-container'>
                {(users).map(user => (
                    <div key={user.Email}> <UserCard user={user} /> </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;

