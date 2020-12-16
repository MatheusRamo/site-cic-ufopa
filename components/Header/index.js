import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="bg-indigo-100 text-center py-2 font-medium text-gray-900"></div>
 
      <div className="bg-indigo-100 py-3 text-center">
      <Link href="/">
            <a className="px-2 font-medium text-gray-500 hover:text-gray-900">Home</a>
        </Link>

        <Link href="/sobre">
            <a className="px-2 font-medium text-gray-500 hover:text-gray-900">Sobre</a>
        </Link>

        <Link href="/contato">
            <a className="px-2 font-medium text-gray-500 hover:text-gray-900">Contato</a>
        </Link>

      </div>
    
    </>
  );
};

export default Header;