import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { AcademicCapIcon, KeyIcon, MailIcon } from "@heroicons/react/outline";
import LoginService from "../../services/LoginService";

const Login = () => {
	const loginService = new LoginService();
	const router = useRouter();
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [getRequestError, setRequestError] = useState<string>();

	const onClickLoginHandler = async () => {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;

		if (!username || !password) {
			setRequestError("Please provide a username and password");
			return;
		}

		const encodedPassword = btoa(password);

		// Calling the user to validate the login
		try {
			const user = await loginService.loginUser(username, encodedPassword);

			if (user) {
				// Redirecting to the welcome page
				router.push(`/welcome?username=${user.username}`);
			} else {
				setRequestError("Invalid username or password");
			}
		} catch (error) {
			console.log("Error:", error);
			setRequestError("An error occurred while logging in");
		}
	};

	return (
		<div className="flex flex-col items-center bg-white p-8 rounded shadow">
			<div className="w-80">
				<h2 className="text-2xl font-bold mb-4">Login</h2>
				<div className="mb-4">
					<label htmlFor="email" className="sr-only">
						Email
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<MailIcon className="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="email"
							name="email"
							type="email"
							className="block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Email"
							ref={usernameRef}
						/>
					</div>
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="sr-only">
						Password
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<KeyIcon className="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="password"
							name="password"
							type="password"
							className="block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Password"
							ref={passwordRef}
						/>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="remember"
							name="remember"
							type="checkbox"
							className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
						/>
						<label
							htmlFor="remember"
							className="ml-2 block text-sm text-gray-900"
						>
							Remember me
						</label>
					</div>
					<div className="text-sm">
						<button className="text-blue-500 hover:text-blue-700" type="button">
							Forgot password?
						</button>
					</div>
				</div>
				<div className="mt-6">
					<button
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						onClick={onClickLoginHandler}
					>
						<AcademicCapIcon className="h-5 w-5 mr-2" />
						Log In
					</button>
					{getRequestError && (
						<p className="text-red-500 mt-2">{getRequestError}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
