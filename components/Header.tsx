import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b border-black">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          NPTEL: Introduction to Internet of Things Quiz
        </h1>
      </div>
    </header>
  );
};

export default Header;
