import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";
import { Container } from "react-bootstrap";
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
        "/blogs",
        "POST"
      );
    }
  };

  return (
    <Container>
    <form>
      <div className="form-group col-sm-4">
        <label htmlFor="name">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={e => handleChange(e.target.value, "title")}
        />
      </div>
      <div className="form-group col-sm-4">
        <label htmlFor="msg">Content</label>
        <input
          type="text"
          className="form-control"
          id="content"
          value={content}
          onChange={e => handleChange(e.target.value, "content")}
        />
      </div>
      <Link to="/blogs">
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
      </Link>
    </form>
    </Container>
  );
};

export default PostBlog;