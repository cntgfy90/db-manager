import express from 'express';
import db from '../config/db';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name } = req.body;

    const [[role]] = await db.query(`SELECT rolname FROM pg_roles WHERE rolname = '${name}'`);

    if (role) {
        res.send('Choose another name');
    } else {
        await db.query(`CREATE ROLE ${name}`);
        res.send('Roles has been successfully created');
    }
});

router.delete('/', async (req, res) => {
    const { name } = req.body;

    const [roles] = await db.query('SELECT rolname FROM pg_roles');
    const doesAlreadyExist = Boolean(roles.find((role) => role.rolname === name));

    if (doesAlreadyExist) {
        await db.query(`DROP ROLE ${name}`);
        res.send('Role is successfully dropped');
    }

    res.send('There is no such role');
});

export default router;
