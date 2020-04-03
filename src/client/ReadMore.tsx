import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import {IBlogs, months} from './Blogs';
import {Container, Card, Button} from 'react-bootstrap';

const ReadMore: React.FC<IReadMoreProps> = ({
    match: {
        params: { id }
      }
}) => {
    const [single, setSingle] = useState<JSX.Element>()

    let showMore = async () => {
        try {
          let res = await fetch(`/api/blogs/${id}`);
          let single: IBlogs = await res.json();
          read(single);
        } catch (error) {
            console.log(error);
        }
    };
    
    let read = (single: IBlogs) => {
      let date: Date = new Date(single._created);
      let dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      setSingle(
        <Card>
          <Card.Body>
          <Card.Title as="h1" className="">{single.title}</Card.Title>
          <Card.Text as="small">{dateFormat}</Card.Text>
          <Card.Text as="p" className="" style={{"marginTop": "10px"}}>{single.content}</Card.Text>
          {/* <Card.Text as="p" className="">{reading.tagName}</Card.Text> */}
          <Button as={Link} to={`/blogs/${single.id}/edit`} style={{"marginLeft": "4px"}}>Edit</Button>
          </Card.Body>
        </Card>
      )
    }
      useEffect(() => {
        showMore();
      }, []);

    return(
        <div>
          <Container className='d-flex flex-column'>
            <h1 className="text-primary text-center">Read More</h1>
           <Link to="/blogs" className="mx-auto btn btn-success justify-content-center align-item-center mb-5">
               Back to Blogs
            </Link>
            {single}
          </Container>
        </div>
    )
}

export interface IReadMoreProps 
    extends RouteComponentProps<{id: string}> {}

export default ReadMore;