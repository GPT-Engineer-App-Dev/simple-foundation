import React from 'react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-green-200">
      <main className="flex-grow">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold mb-4 text-green-800">Your Blank Canvas</h1>
          <p className="text-lg text-green-700">Chat with the agent to start making edits.</p>
        </div>
      </main>
      <footer className="bg-green-300 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-green-800">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;