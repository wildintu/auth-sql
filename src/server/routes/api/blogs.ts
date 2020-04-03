import * as express from 'express';
import DB from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const router = express.Router();

const isAdmin: RequestHandler = (req: any, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
}

router.get('/', (req, res, next) => {
    res.json('Welcome to Feed Tigers!');
});

router.get('/blogs', async (req, res) => {
    try {
        let blogs = await DB.Blogs.getAllBlogs();
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/blogs/:id', isAdmin, async (req, res) => {
    try {
        let blogs = await DB.Blogs.getOneBlog(parseInt(req.params.id, 10));
        res.json(blogs[0]);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.post('/blogs', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let userid = parseInt(req.body.userid, 10);
    try {
        let blogs = await DB.Blogs.postBlog(title, content);
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.put('/blogs/:id?', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let id = parseInt(req.params.id, 10);
    // let userid = parseInt(req.body.authorid, 10);
    try {
        let blogs = await DB.Blogs.editBlog(title, content, id);
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.delete('/blogs/:id?', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    try {
        let blogs = await DB.Blogs.deleteBlog(id);
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;