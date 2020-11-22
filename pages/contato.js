import React from 'react';
import Title from '../components/Title';

const Contato = () => {
    return (
        <div>
            <Title>Contato</Title>
    
            <h1 className=" my-4 text-center text-gray-600 font-bold text-2xl">Contato</h1>


            <div className="w-58 text-center mx-auto">

                <label className="font-bold">Nome:</label>
                <input className="p-4 block bg-blue-100 mx-auto my-2 rounded" placeholder="Nome" name="Nome"  type="text"></input>

                <label className="font-bold">Email:</label>
                <input className="p-4 block bg-blue-100 mx-auto my-2 rounded" placeholder="Email" name="Email" type="text"></input>

                <label className="font-bold">Mensagem:</label>
                <input className="px-4 py-8 block bg-blue-100 mx-auto my-2 rounded" placeholder="Mensagem"  name="Mensagem" type="text"></input>

                <button className="bg-blue-400 mx-auto p-2 font-bold rounded-lg mb-48 hover:shadow-lg" >Salvar</button>
                
            </div>

        </div>
    )
};

export default Contato;