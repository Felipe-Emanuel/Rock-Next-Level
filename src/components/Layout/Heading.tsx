import { ReactNode } from 'react';

import { Button } from '../Form/Button';
import { TextInput } from '../Form/TextInput';
import { UserLog } from './User';
import { Text } from '../Layout/Text';

import { MagnifyingGlass, CaretDown } from 'phosphor-react'


export interface HeadingProps {
    className?: ReactNode;
}

export function Heading () {
    return (
            <div className='bg-topbackground w-full h-full bg-cover bg-center'
            >

                <div className='
                    flex-row max-w-4xl m-auto
                    lg:flex'
                >
                    <form className='
                        py-8 flex items-center
                        lg:w-screen'
                    >
                        <label htmlFor='search' className='
                            flex flex-cols w-[166px] m-auto
                            sm:w-56
                            md:w-[300px]
                            xl:w-[750px]'
                        >
                            <TextInput.Root>
                                <TextInput.Input type='text' id='search' placeholder="What are you loocking for?" />
                                <button>
                                    <TextInput.Icon>
                                        <MagnifyingGlass />
                                    </TextInput.Icon>
                                </button>
                            </TextInput.Root>
                        </label>
                            
                        <Text className='
                            hidden mr-2
                            sm:block'
                        >
                            <UserLog />
                        </Text>

                    </form>
                </div>

                <div className='
                    hidden px-4 gap-6 m-auto justify-center
                    lg:flex'
                >
                    <Button>HOME</Button>
                    <Button>
                        <Text className='flex justify-center gap-3 items-center hover:text-white-Total'>
                            BRANDS
                            
                            <CaretDown className='hover:ring-1 ring-white-Total rounded-full hover:animate-bounce' />
                        </Text>
                    </Button>
                    <Button>UTILITYS</Button>
                    <Button>ABOUT</Button>
                    <Button>CONTACT</Button>
                </div>

            <div className='py-16 flex flex-col justify-center gap-3 text-center items-center font-thin text-lightPink hover:text-white-Total'>
                <Text className='
                    text-[34px] py-0
                    lg:text-6xl'
                >
                    High quality in
                </Text>
                <Text className='
                    text-[34px] py-0
                    lg:text-6xl'
                >
                your guitar boughts
                </Text>
                <Text className='text-[10px] sm:text-[14px]'>
                    Over 30.000 deliveries made worldwide, taking your to rock Next Level
                </Text>
            </div>
            <div className='flex justify-center m-auto'>
                <Button className='
                    text-[12px] mb-8 font-extralight ring-1
                    sm:text-[16px]'
                >
                    BUY WITH US
                </Button>
            </div>
            </div>
)}
