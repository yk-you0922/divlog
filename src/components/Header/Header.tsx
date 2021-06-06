import { VFC } from 'react';
import Image from 'next/image';
import { Switch, FormGroup, FormControlLabel } from '@material-ui/core';

export const Header: VFC = () => {
	return (
		<div className="bg-white border-b-4 border-teal-700 min-h-full h-30 p-5">
			<div className="flex justify-between items-center">
				<h1>divlog</h1>
				<div className="flex items-center">
					<FormGroup>
						<FormControlLabel
							value="start"
							control={<Switch color="primary" />}
							label=""
							labelPlacement="bottom"
						/>
					</FormGroup>
					<Image
						src="/icon.jpg"
						alt="userImage"
						width={50}
						height={50}
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
