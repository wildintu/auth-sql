import { Query } from '../index';

const findOneByEmail = async (email: string) => Query(`SELECT * FROM users WHERE email = ?`, [email]);

const fineOneById = async ( id: number) => Query(`SELECT * FROM users WHERE id = ? LIMIT 1`, [id]);

const insert = async (user: any) => Query(`INSERT INTO users (email, firstname, lastname, password) VALUES ?`,user)

export default {
    findOneByEmail,
    fineOneById,
    insert
}