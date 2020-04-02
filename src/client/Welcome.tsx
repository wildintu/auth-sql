import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IAppProps } from './App';

const Welcome: React.FC<IAppProps> = props => {
    
    return (
        <div>
        <Container className='d-flex flex-column'>
        <Card.Title as="h1" className='text-primary text-center'>Welcome to Carol's Blog</Card.Title>
        <Button as={Link} to={'/blogs'} variant="success" className='mx-auto'>View Blogs</Button>
        </Container>
        </div>
    );	
}

export default Welcome;
