import * as express from 'express';
import DB from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const router = express.Router();

const isAdmin: RequestHandler = (req:any, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
}

router.get('/', async (req, res, next) => {
    try {
        let blogs = await DB.Blogs.getAllBlogs();
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:id', isAdmin, async (req, res, next) => {
    let id = parseInt(req.params.id, 10);
    try {
        let blog = await DB.Blogs.getOneBlog(id);
        res.json(blog[0]);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.post('/', async (req, res) => {
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

router.put('/:id?', async (req, res) => {
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

router.delete('/:id?', async (req, res) => {
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