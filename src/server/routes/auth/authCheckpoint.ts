import {RequestHandler} from 'express';
import * as passport from 'passport';

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
    passport.authenticate('bearer', (err, user) => {
        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);
}