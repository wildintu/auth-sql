import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { ApiTS } from './services/Api';
import { LoginTS } from './services/Login';

const Welcome: React.FC<WelcomeProps> = props => {
	useEffect(() => {
		//use helper function to see if we stay or go
		LoginTS().then(decision => {
			if (!decision) {
				//decision was false?
				//route to login!
				props.history.push('/login');
			} else {
				//decision was true?
				//fetch protected data!
				ApiTS('/api/test').then(data => console.log(data));
			}
		});
	}, []);

	return (
		<div>
			<h1 className="text-center">Home Component</h1>
		</div>
	);
};

interface WelcomeProps extends RouteComponentProps {}

export default Welcome;
