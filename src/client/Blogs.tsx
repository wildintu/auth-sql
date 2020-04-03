import React, { useState, useEffect} from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {IAppProps} from './App';

export const months: Array<string> = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const Blogs: React.FC<IAppProps> = props => {
    const [blog,setBlog] = useState<JSX.Element[]>([]);

	let grabBlogs = async () => {
		try {
			let r: Response = await fetch('/api/blogs');
            let json: Array<IBlogs> = await r.json();
            blogsArray(json);
		} catch (error) {
			console.log(error);
		}
    }
    
    let blogsArray = (json: Array<IBlogs>) => {
        let cardsArr = json.map((element,index) => {
            let Title: string = element.title;
            let Content: string = element.content;
            let id: number = element.id;
            let FirstName: string = element.firstname;
            // let LastName: string =  element.lastname;
            // let Email: string = element.email;
            // let UserId: number = element.userid;
            let date: Date = new Date(element._created);
            let dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            return (
                <Container className='d-flex flex-column' key={index}> 
                <Card className="my-5 mx-auto" style={{"maxWidth": "700px"}}>
                    <Card.Img src="https://www.wikicelebs.com/wp-content/uploads/2020/03/Carole-Baskin-1.jpg" />
                    <Card.Body>
                    <Card.Title as="h1" className="text-center">{Title}</Card.Title>
                    <Card.Text as="p" className="text-center">{dateFormat}</Card.Text>
                    {/* <Card.Text as="p" className="" style={{"marginTop": "10px"}}>{Content}</Card.Text> */}
                    {/* <Card.Text as="p" className="">{FirstName}</Card.Text>
                    <Card.Text as="p" className="">{TagName}</Card.Text> */}
                    </Card.Body>
                    <Button as={Link} to={`/blogs/${id}`} className="mx-auto" style={{"marginBottom": "20px"}}>Read More</Button>
                </Card>
                </Container>
            );
        })
        setBlog(cardsArr);
    }

    useEffect(() => {
        grabBlogs();
    }, []);
    
    return (
        <div>
        <Container className='d-flex flex-column'>
        <h1 className='text-primary text-center'>Confessions of a Tiger Feeder</h1>
        <Button as={Link} to={'/postblog'} variant="success" className="mx-auto">Post to Blog</Button>
        {blog}
        </Container>
        </div>
    );	
}

export default Blogs;

export interface IBlogs {
    // blogid: string;
    title: string;
    content: string;
    _created: string;
    firstname: string;
    id: number;
    // tagName: string;
    // tagid: number;
    // authorid: number;
}