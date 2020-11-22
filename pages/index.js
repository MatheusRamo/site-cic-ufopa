import React from 'react';
import Title from '../components/Title';
import Image from 'next/image';


const Index = () => {
    return (

        <div>
            <Title>Home</Title>
            <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">

                <div className="border-2 border-solid rounded w-64 h-64 mx-auto my-2">

                    <h2 className="font-bold">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}/>
                        
                </div>

                <div className="border-2 border-solid rounded w-64 h-64 mx-auto my-2">

                    <h2 className="font-bold">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}/>
                </div>

                <div className="border-2 border-solid rounded w-64 h-64 mx-auto my-2">
                    
                    <h2 className="font-bold">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}/>
                </div>

                <div className="border-2 border-solid rounded w-64 h-64 mx-auto my-2">

                    <h2 className="font-bold">Integral</h2>

                    <Image src="/integral.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}/>
                        
                </div>

            </div>
        </div>
    )
};


export default Index;