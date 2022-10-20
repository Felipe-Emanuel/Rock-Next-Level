import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { AvatarUser } from "./Avatar";
import { Text } from "../Layout/Text";

export function Footer () {
    return (
        <footer className='bg-purple-900 h-[25%] bg-gradient-to-b from-white-500'>
                <div className='text-center'>
                    <Carousel >
                        
                        <Carousel.Item>
                            <div className='
                                m-auto w-[70vw] h-[34vh]
                                sm:h-[30vh] sm:w-[50vw]'
                            >
                                <div className='flex flex-col items-center mt-8'>

                                    <AvatarUser />

                                <p className='mt-3'>Maria</p>

                                </div>

                                <p className='
                                    text-[12px] h-[12vh] overflow-y-scroll 
                                    sm:text-[14px] sm:overflow-hidden sm:h-[20vh]'
                                >
                                    Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dol
                                </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='
                                m-auto w-[70vw] h-[34vh]
                                sm:h-[30vh] sm:w-[50vw]'
                            >
                                <div className='flex flex-col items-center mt-8'>

                                    <AvatarUser />

                                <p className='mt-3'>Giulia</p>

                                </div>

                                <p className='
                                    text-[12px] h-[12vh] overflow-y-scroll 
                                    sm:text-[14px] sm:overflow-hidden sm:h-[20vh]'
                                >
                                    Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dol
                                </p>
                            </div>
                        </Carousel.Item>
                       
                        <Carousel.Item>
                            <div className='
                                m-auto w-[70vw] h-[34vh]
                                sm:h-[30vh] sm:w-[50vw]'
                            >
                                <div className='flex flex-col items-center mt-8'>

                                    <AvatarUser />

                                <p className='mt-3'>Sabrina</p>

                                </div>

                                <p className='
                                    text-[12px] h-[12vh] overflow-y-scroll 
                                    sm:text-[14px] sm:overflow-hidden sm:h-[20vh]'
                                >
                                    Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dolLorem ipsum dolorLorem ipsum dolorLorem ipsum dol
                                </p>
                            </div>
                        </Carousel.Item>
                       
                    </Carousel>
                </div>
        <div className='text-[12px]'>
            <Text className='flex flex-col text-center'>
                <p>Guitar Next Level</p>
                <span className='text-white-500'> &copy; 2022</span>
            </Text>
        </div>
        </footer>



    )
}