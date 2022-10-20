import { ReactNode } from 'react';
import { CheckDisponibility } from './CheckDisponibility';
import { ShowMore } from './ShowMore';
import { Especifications } from './Especifications';

export interface GuitarCardProps {
    children?: ReactNode;
}
export function GuitarCard(){
    return (

        <div className='w-0
            mt-16 flex flex-col 
            sm:flex-row sm:w-[75vw] 
            md:flex-row md:w-[75vw] 
            lg:w-[75vw] lg:m-auto lg:mt-16
            2xl:flex-row'
        >
            
            <div data-animate='left' className='
                w-28 flex flex-row m-auto 
                md:w-32
                lg:w-48'
            >

                    <img className='w-72 m-auto '
                        src='./img/card-1.png'
                        alt='Guitar Gibson LP 230 Cherry'
                    />
                    <div id='Show-and-check '>
                        <ShowMore />
                        <CheckDisponibility />
                        <Especifications />
                    </div>

            </div>

            <div data-animate='right' className='
                w-28 flex flex-row m-auto 
                sm:m-auto
                md:w-32
                lg:w-48'
            >

                    <img className='w-72 m-auto'
                        src='./img/card-1.png'
                        alt='Guitar Gibson LP 230 Cherry'
                    />
                    <div className='mt-16 sm:mt-0' id='Show-and-check'>
                        <ShowMore />
                        <CheckDisponibility />
                        <Especifications />
                    </div>

            </div>
            
        </div>
    )
}