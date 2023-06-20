import Login from "../components/Login/Login";

const HomePage = () => {
	return (

        <div className="flex flex-col items-center justify-center h-screen bg-blue-50" >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to SafeRide Health</h1>
          <p className="text-lg text-gray-600">
            Authentication MicroService. By: Yacell Borges
          </p>
        </div>
        <div className="mt-8">
          <Login />
        </div>
      </div>
	);
};

export default HomePage;
