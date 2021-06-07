import { TextField } from '@material-ui/core';
import React, {
	ChangeEvent,
	MouseEvent,
	useCallback,
	useState,
	VFC,
} from 'react';

import { PrimaryButton } from 'src/components/Button/PrimaryButton';
import { Card } from 'src/components/Card/Card';
import { Title } from 'src/components/Header/Title';

const Login: VFC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleEmail = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setEmail((email) => e.target.value);
		},
		[email]
	);

	const handlePassword = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setPassword((password) => e.target.value);
		},
		[password]
	);

	const handleLogin = (e: MouseEvent<HTMLInputElement>) => {
		e.preventDefault();
		fetch('http://localhost:3100/users').then((res) => res.json());
	};

	return (
		<div>
			<Title>Login</Title>
			<Card>
				<form>
					<div className="mt-5">
						<TextField
							required
							id="standard-required"
							label="Email"
							type="text"
							autoComplete="email"
							fullWidth
							value={email}
							onChange={handleEmail}
						/>
					</div>
					<div className="mt-16">
						<TextField
							required
							id="filled-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
							fullWidth
							value={password}
							onChange={handlePassword}
						/>
					</div>
					<div className="mt-16 text-center">
						<PrimaryButton onClick={handleLogin}>ログイン</PrimaryButton>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default Login;
