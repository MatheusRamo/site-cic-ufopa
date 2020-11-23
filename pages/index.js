import React from 'react';
import Title from '../components/Title';
import Image from 'next/image';


const Index = () => {
    return (

        <div>
            <Title>Home</Title>
            <div className="text-center py-3 bg-blue-200">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">Introdução ao Cálculo</span>
                    <span class="block text-green-600 xl:inline"> Ufopa</span>
                </h1>
            </div>

            <div className="container text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 bg-indigo-100">

                <div className="border-2 border-solid rounded-lg w-60 h-auto mx-auto my-2 bg-red-300 hover:bg-red-200">

                    <h2 className="font-bold my-2">Números</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={150}
                        height={150}/>
                        
                    <p className="my-2 text-white">Número é um objeto abstrato da matemática usado pa.</p>
                        
                </div>

                <div className="border-2 border-solid rounded-lg w-60 h-auto mx-auto my-2 bg-red-200 hover:bg-red-100">

                    <h2 className="font-bold my-2">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={150}
                        height={150}/>
                    <p className=" my-2">
                    O cálculo diferencial e integral, também conhecido como cálculo i.
                    </p>
                </div>

                <div className="border-2 border-solid rounded-lg w-60 h-auto mx-auto my-2 bg-green-400 hover:bg-green-300">

                    <h2 className="font-bold my-2">Derivada</h2>

                    <Image src="/derivada.png"
                        alt="Picture of the author"
                        width={150}
                        height={150}/>

                    <p className=" my-2 ">
                    O cálculo diferencial e integral, também conhecido como cálculo in
                    </p>
                </div>

                <div className="border-2 border-solid rounded-lg w-60 h-auto mx-auto my-2 bg-blue-400 hover:bg-blue-300">

                    <h2 className="font-bold my-2">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={150}
                        height={150}/>
                    
                    <p className="my-2">
                    Número primo é qualquer número cujo conjunto dos divisores não inver.
                    </p>
                        
                </div>

                <div className="border-2 border-solid rounded-lg w-60 h-auto mx-auto my-2 bg-blue-400 hover:bg-blue-300">

                    <h2 className="font-bold my-2">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={150}
                        height={150}/>
                    
                    <p className="my-2">
                    Número primo é qualquer número cujo conjunto dos divisores.
                    </p>
                        
                </div>

                

                

            </div>
        </div>
    )
};


export default Index;