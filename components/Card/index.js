import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Card = ({titulo, descricao,imagem, color, hoverColor, link}) => {
    return (
        <div className={"border-2 border-solid rounded-xl shadow-md w-52 h-auto mx-auto my-2 "+color+" hover:"+hoverColor+ " lg:mx-2"}>

                    <div  className="mt-5">
                        <Image src={imagem} alt="Picture of the author" width={120} height={120}/>
                    </div>

                    <Link href={link}>
                        <a class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{titulo}</a>
                    </Link>

                    <p className="my-2 text-gray-500">{descricao}</p>
        </div>
    );
}

export default Card;