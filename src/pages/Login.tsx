import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useState, VFC } from 'react';

import { PrimaryButton } from 'src/components/Button/PrimaryButton';
import { Card } from 'src/components/Card/Card';
import { Title } from 'src/components/Header/Title';

const Login: VFC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail((email) => e.target.value);
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword((password) => e.target.value);
	};

	return (
		<div className="m-10">
			<Card>
				<Title>Login</Title>
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
						<PrimaryButton>ログイン</PrimaryButton>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default Login;
