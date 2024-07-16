import React from 'react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="py-6 px-4 bg-gray-800">
        <nav className="container mx-auto">
          <h1 className="text-2xl font-bold">YourBrand</h1>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Welcome to Your Blank Canvas</h2>
          <p className="text-xl mb-8">Unleash your creativity and start building something amazing.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;