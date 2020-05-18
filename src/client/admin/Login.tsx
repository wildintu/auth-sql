import React, { useState, useEffect} from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Login: React.FC<LoginProps> = props => {
    const [values, setValues] = React.useState<{ [key: string]: string }>({
        email: 'carol@feedtigers.com',
        password: 'sardineoil'
    });

    return(
        <Container>

        </Container>
    );
}

interface LoginProps { }

export default Login;