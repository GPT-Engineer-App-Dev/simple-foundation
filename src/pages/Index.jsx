import React from 'react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-100">
      <main className="flex-grow">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold mb-4 text-red-800">Your Blank Canvas</h1>
          <p className="text-lg text-red-700">Chat with the agent to start making edits.</p>
        </div>
      </main>
      <footer className="bg-red-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-red-800">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;