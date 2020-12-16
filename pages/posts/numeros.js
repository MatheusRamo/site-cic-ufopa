import React from "react";
import Title from "../../components/Title";
import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";



const Numeros = () => {
  return (
    <div>
      <Title>Home</Title>

      
      <Menu/>

      <div className="text-center grid grid-cols-5">
        
        
        <div className="col-start-1 col-end-6 ">
          <section className="container  text-center p-10 sm:text-xl md:text-xl lg:text-xl">
            <h1 className="font-bold">Noção de Conjunto</h1>
            <p className="text-gray-500">Um conjunto é uma coleção qualquer de objetos formado por elementos.</p>
            <p className="text-gray-500"> Um objeto a qualquer pode ser elemento de determinado conjunto A ou não</p>
            <p className="text-gray-500">Um conjunto é uma coleção qualquer de objetos formado por elementos.</p>
            <p className="text-gray-500"> Um objeto a qualquer pode ser elemento de determinado conjunto A ou não</p>
            <div className="p-2 mt-20">
                <Image
                src="/integral.png"
                alt="Picture of the author"
                width={100}
                height={100}
                />

                <div>
                    <h2 className="font-bold">Numeros</h2>
                </div>
            </div>

            <p className="text-gray-500">Um conjunto é uma coleção qualquer de objetos formado por elementos.</p>
            <p className="text-gray-500"> Um objeto a qualquer pode ser elemento de determinado conjunto A ou não</p>
            <p className="text-gray-500">Um conjunto é uma coleção qualquer de objetos formado por elementos.</p>
            <p className="text-gray-500"> Um objeto a qualquer pode ser elemento de determinado conjunto A ou não</p>

            <div className="p-2 mt-20">
                <Image
                src="/integral.png"
                alt="Picture of the author"
                width={100}
                height={100}
                />

                <div>
                    <h2 className="font-bold">Numeros</h2>
                </div>
            </div>

            <p className="text-gray-500">Um conjunto é uma coleção qualquer de objetos formado por elementos.</p>
            <p className="text-gray-500"> Um objeto a qualquer pode ser elemento de determinado conjunto A ou não</p>
            <p className="text-gray-500">Um conjunto é uma coleção qualquer de objetos formado por elementos.</p>
            <p className="text-gray-500"> Um objeto a qualquer pode ser elemento de determinado conjunto A ou não</p>


            </section>

            
            
        </div>
      </div>
    </div>
  );
};

export default Numeros;
