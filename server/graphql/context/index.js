import User from '../../database/models/user.js';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

const verifyToken = async (token) => {
    try {
        if (!token) return null;

        const { id } = await jwt.verify(token, 'mySecret');
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        throw new AuthenticationError(error.message);
    }
};

export default async ({ req }) => {
    const token = (req.headers && req.headers.authorization) || '';
    const user = await verifyToken(token)
    return { user };
};