import { TextField } from '@material-ui/core';
import { VFC } from 'react';
import { PrimaryButton } from 'src/components/Button/PrimaryButton';
import { Title } from 'src/components/Header/Title';

const Login: VFC = () => {
	return (
		<div className="bg-white rounded-lg text-center m-10 p-5">
			<Title>ログイン</Title>
			<div className="mt-5">
				<TextField required id="standard-required" label="Email" fullWidth />
			</div>
			<div className="mt-16">
				<TextField
          required
					id="filled-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
          fullWidth
				/>
			</div>
			<div className="mt-16 text-center">
				<PrimaryButton>ログイン</PrimaryButton>
			</div>
		</div>
	);
};

export default Login;
