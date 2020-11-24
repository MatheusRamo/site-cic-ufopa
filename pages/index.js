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

            

            <div className="text-center grid grid-cols-1  p-2 bg-indigo-100 sm:grid-cols-2 sm:mx-20 md:grid-cols-3 md:mx-10 lg:grid-cols-4 lg:mx-35 xl:mx-50 xl:grid-cols-5">

                <div className="border-2 border-solid rounded-xl shadow-md w-52 h-auto mx-auto my-2  bg-red-300 hover:bg-red-200 lg:mx-2">

                    <div  className="mt-5">
                        <Image src="/integral.png" alt="Picture of the author" width={120} height={120}/>
                    </div>

                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Números</a>
                    <p className="my-2 text-gray-500">Número é um objeto abstrato da matemática usado pa.</p>
                        
                </div>

                <div className="border-2 border-solid rounded-xl shadow-md w-52 h-auto mx-auto my-2 bg-red-200 hover:bg-red-100 lg:mx-2">

                    <div  className="mt-5">
                        <Image src="/integral.png" alt="Picture of the author" width={120} height={120}/>
                    </div>

                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Números</a>
                    <p className="my-2 text-gray-500">Número é um objeto abstrato da matemática usado pa.</p>
                </div>

                <div className="border-2 border-solid rounded-xl shadow-md w-52 h-auto mx-auto my-2 bg-green-400 hover:bg-green-300 lg:mx-2">

                    <div  className="mt-5">
                        <Image src="/integral.png" alt="Picture of the author" width={120} height={120}/>
                    </div>

                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Números</a>
                    <p className="my-2 text-gray-500">Número é um objeto abstrato da matemática usado pa.</p>
                </div>

                <div className="border-2 border-solid rounded-xl shadow-md w-52 h-auto mx-auto my-2 bg-blue-400 hover:bg-blue-300 lg:mx-2">

                    <div  className="mt-5">
                        <Image src="/integral.png" alt="Picture of the author" width={120} height={120}/>
                    </div>

                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Números</a>
                    <p className="my-2 text-gray-500">Número é um objeto abstrato da matemática usado pa.</p>
                        
                </div>

                <div className="border-2 border-solid rounded-xl shadow-md w-52 h-auto mx-auto my-2 bg-blue-400 hover:bg-blue-300 lg:mx-2">

                    <div  className="mt-5">
                        <Image src="/derivada.png" alt="Picture of the author" width={120} height={120}/>
                    </div>

                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Números</a>
                    <p className="my-2 text-gray-500">Número é um objeto abstrato da matemática usado pa.</p>
                        
                </div>

                

                

            </div>
        </div>
    )
};


export default Index;