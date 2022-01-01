import Image from 'next/image';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';

function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-black relative">
			<Head>
				<title> Login </title> <link rel="icon" href="/favicon.ico" />
			</Head>{' '}
			<h1>Login screen</h1>
			<div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
				<Image
					className="object-cover rounded-full"
					src="https://raw.githubusercontent.com/TECHforGEEKS/TECHforGEEKS/main/Profile.jpg"
					height={200}
					width={200}
				/>
				<button
					onClick={authenticate}
					className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
				>
					Login to the Metaverse
				</button>
			</div>
			<div className="w-full h-screen">
				<Image
					src="https://links.papareact.com/55n"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}

export default Login;
