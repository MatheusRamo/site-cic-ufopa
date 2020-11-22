import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="bg-white text-center p-4 font-medium text-gray-900">Curso Introdução ao Cálculo - Ufopa</div>
 
      <div className="bg-white p-2 text-center ">
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