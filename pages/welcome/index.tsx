import Link from 'next/link';
import React from 'react';

const Welcome: React.FC<{ username: string }> = ({ username }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome, {username}!</h1>
      <p className="text-lg">You have successfully logged in.</p>
      <Link href="/">
        <span className="mt-4 text-blue-500 underline">Go back to login</span>
      </Link>
    </div>
  );
};

export default Welcome;