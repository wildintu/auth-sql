import * as mysql from 'mysql';
import config from '../config';

//table query imports
import Blogs from './queries/blogs';
import Users from './queries/users';
import AccessTokens from './queries/accesstokens';

//node - mysql connection pool
export const pool = mysql.createPool(config.mysql);

//reusable query helper method
export const Query = (query: string, values?: Array<string|number>) => {
        return new Promise<Array<any>>((resolve, reject) => {
            pool.query(query, values, (err, results) => {
                if(err) reject(err);
                return resolve(results);
            });
        });
};

//export for use, ie DB.Blogs...
export default {
    Blogs,
    Users,
    AccessTokens
}