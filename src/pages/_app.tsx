import { VFC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import 'src/styles/globals.css';
import { Header } from 'src/components/Header/Header';
import { Sidebar } from 'src/components/Sidebar/Sidebar';

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
	return (
		<div className="text-gray-600 relative">
			<Head>
				<title>divlog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="flex">
				<Sidebar />
				<div className="w-full bg-blue-100 p-7">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
};

export default MyApp;
