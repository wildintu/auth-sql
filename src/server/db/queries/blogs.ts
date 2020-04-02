import { Query } from '../index';

const getAllBlogs = async () => Query('SELECT * FROM blogs');

const getOneBlog = async (id: number) => Query(`SELECT * FROM blogs WHERE id = ${id}`);

const postBlog = async (title: string, content: string) => Query(`INSERT INTO blogs(title, content) VALUES('${title}', '${content}')`);

const editBlog = async (title: string, content: string, id: number) => Query(`UPDATE blogs SET title = '${title}', '${content}' WHERE id = ${id}`);

const deleteBlog = async (id: number) => Query(`DELETE FROM blogs WHERE id = ${id}`);


export default {
    getAllBlogs,
    getOneBlog,
    postBlog,
    editBlog,
    deleteBlog
}