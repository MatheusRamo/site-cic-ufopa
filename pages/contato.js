import React from 'react';
import Title from '../components/Title';

const Contato = () => {
    return (
        <div>
            <Title>Contato</Title>

            <div className="w-58 text-center mx-auto mt-10">

                <label className="font-bold">Nome:</label>
                <input className="p-4 block bg-blue-100 mx-auto my-2 rounded md:text-xl w-64" placeholder="Nome" name="Nome"  type="text"></input>

                <label className="font-bold">Email:</label>
                <input className="p-4 block bg-blue-100 mx-auto my-2 rounded md:text-xl w-64" placeholder="Email" name="Email" type="text"></input>

                <label className="font-bold">Mensagem:</label>

                <textarea cols="8" rows="2" className="px-4 py-8 block bg-blue-100 mx-auto my-2 rounded md:text-xl w-64" placeholder="Mensagem"></textarea>

                <button className="bg-blue-400 mx-auto p-2 font-bold rounded-lg mb-10 hover:shadow-lg" >Salvar</button>
                
            </div>

        </div>
    )
};

export default Contato;