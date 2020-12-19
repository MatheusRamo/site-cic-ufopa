import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';


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


                <Card titulo="Números" descricao="Númeremática usado pa." imagem="/integral.png" color="bg-red-300" hoverColor="bg-red-200" link="/posts/numeros" />

                <Card titulo="Teste" descricao="Número é um mática usado pa." imagem="/integral.png" color="bg-blue-300" hoverColor="bg-blue-200" link="/posts/numeros" />

                <Card titulo="Adição" descricao="Número é um objeto abstrato da" imagem="/integral.png" color="bg-red-200" hoverColor="bg-red-100" link="/posts/numeros" />

                <Card titulo="Numeros" descricao="Número é um objeto abstrato." imagem="/integral.png" color="bg-green-400" hoverColor="bg-green-300" link="/posts/numeros" />

                <Card titulo="Teste" descricao="Número é um objeto abstrato da " imagem="/integral.png" color="bg-blue-300" hoverColor="bg-blue-200" link="/posts/numeros" />

                <Card titulo="Teste" descricao="Número é um objeto abstrato da ." imagem="/integral.png" color="bg-blue-300" hoverColor="bg-blue-200" link="/posts/numeros" />

                <Card titulo="Teste" descricao="Número é um objeto abstrato pa." imagem="/derivada.png" color="bg-blue-200" hoverColor="bg-blue-100" link="/posts/numeros" />

                <Card titulo="Teste" descricao="Número é um objeto abstrato a." imagem="/derivada.png" color="bg-yellow-300" hoverColor="bg-yellow-200" link="/posts/numeros" />

            </div>
        </div>
    )
};


export default Index;