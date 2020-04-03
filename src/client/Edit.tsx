import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";
import {IBlogs, months} from './Blogs';

let Edit: React.FC<IEditProps> =  ({
    match: {
        params: { id }
      }
}) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    let handleChange = (e: string, id: string) => {
        if (id === "title") {
          setTitle(e);
        } else if (id === "content") {
          setContent(e);
        } 
      };
    
      let handleClick = () => {
        if (title !== "title" && content !== "content") {
          Fetch(
            {
              title: title,
              content: content,
            },
            `/api/blogs/${id}`,
            "PUT"
          );
        }
      };
    
      let handleDelete = () => {
        if (title !== "title" && content !== "content") {
          Fetch(
            {
              title: title,
              content: content,
            },
            `/api/blogs/${id}`,
            "DELETE"
          );
        }
      };
    
      let postEditedBlog = async () => {
        try {
          let res = await fetch(`/api/blogs/${id}`);
          let newBlog: IBlogs = await res.json();
          setTitle(newBlog.title);
          setContent(newBlog.content);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        postEditedBlog();
      }, []);
    
      return (
        <Container>
        <Form className="">
          <Form.Group className="form-group col-lg-4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              value={ title }
              onChange={e => handleChange(e.target.value, "title")}
            />
            <Form.Label style={{"marginTop": "25px"}}>Content</Form.Label>
            <Form.Control as="textarea" rows="3"
              type="text"
              id="content"
              value={ content }
              onChange={e => handleChange((e.target as HTMLTextAreaElement).value, "content")}
              />
              </Form.Group>
          </Form>
          <Button as={Link} to={`/blogs/${id}`} className="btn btn-primary ml-3"
          onClick={() => {
              handleClick();
            }}>Save Edits</Button>
          <Button as={Link} to={`/blogs`}
          className="btn btn-primary ml-3"
          onClick={() => {
              handleDelete();
            }}>Delete</Button>
        </Container>
      );

}


export interface IEditProps 
    extends RouteComponentProps<{id: string}> {}

export default Edit;