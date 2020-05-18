import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { ApiTS, setToken } from '../services/Api';
import { LoginTS } from '../services/Login';

const Login: React.FC<LoginProps> = props => {
	const [email, setEmail] = useState<string>('carol@feedtigers.com');
	const [password, setPassword] = useState<string>('sardineoil');

	useEffect(() => {
		//use helper function to see if we stay or go
		LoginTS().then(decision => {
			if (decision) {
				//decision was true?
				//route back to home!
				props.history.push('/');
			}
			//otherwise just stay here to login :P
		});
	}, []);

	const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let result = await ApiTS('/auth/login', 'POST', { email, password });
		if (result?.token) {
			setToken(result.token);
			props.history.push('/blogs');
		}
	};

	return (
		<div>
			<form action="">
				<input value={email} onChange={e => setEmail(e.target.value)} type="email" />
				<input value={password} onChange={e => setPassword(e.target.value)} type="password" />
				<button onClick={handleLogin}>Login, Sucka!</button>
			</form>
		</div>
	);
};

interface LoginProps extends RouteComponentProps {}

export default Login;