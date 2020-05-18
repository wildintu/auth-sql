import * as React from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Register: React.FC<RegisterProps> = props => {
    const [values, setValues] = React.useState<{ [key: string]: string }>({
        // email: '',
        // password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState) => ({ ...prevState,[e.target.name]: e.target.value}));
    };

    const handleRegister = async () => {
        const res = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Types': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if(res.ok) {
            const info = await res.json();
            console.log(info);
        }
    }

    return(
        <Container>

        </Container>
    );
}

interface RegisterProps { }

export default Register;