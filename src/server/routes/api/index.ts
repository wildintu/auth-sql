import * as express from 'express';
import * as passport from 'passport';

import {tokenCheckpoint} from '../auth/authCheckpoint';
import blogsRouter from './blogs';

const router = express.Router();

router.use('/blogs', tokenCheckpoint, blogsRouter);

export default router;