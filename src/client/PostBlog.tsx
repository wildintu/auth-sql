import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";
import { Container, Form, Button } from "react-bootstrap";
import { IAppProps } from "./App";

const PostBlog: React.FC<IAppProps> = props => {
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
    if (title !== "" && content !== "") {
      Fetch(
        {
          title: title,
          content: content,
        },
        "/api/blogs",
        "POST"
      );
    }
  };

  return (
    <Container>
    <Form>
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
        <Button as={Link} to={'/blogs'} className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}>Submit</Button>
        <Button as={Link} to={`/blogs`}
          className="btn btn-primary ml-3"
          >Go Back</Button>  
    </Container>
  );
};

export default PostBlog;