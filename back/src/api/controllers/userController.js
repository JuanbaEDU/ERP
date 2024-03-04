const userRepository = require('../../repositories/userRepository');

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userRepository.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener el usuario', error: err });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userRepository.getUserList();
        res.json(users);
    } catch (err) {
        console.error('Error al obtener users:', err);
        res.status(500).json({ message: 'Error al obtener users' });
    }
};

const filterUsers = async (req, res) => {
    try {
        const filter = req.params.filter;
        const users = await userRepository.getUserFilter(filter);
        res.json(users);
    } catch (err) {
        console.error('Error al obtener users:', err);
        res.status(500).json({ message: 'Error al obtener users' });
    }
};


const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await userRepository.createUser(newUser);
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(400).send('Error al crear el usuario');
        }
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        res.status(500).json({ message: 'Error al crear el usuario', error: err });
    }
};




module.exports = { getUsers, getUser, filterUsers, createUser };