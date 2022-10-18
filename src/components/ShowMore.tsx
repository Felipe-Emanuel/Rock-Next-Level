import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { clsx } from 'clsx';

import { Text } from './Text'

import { TooltipEye } from './FnTooltip';

export interface ShowMoreProps {
    children?: ReactNode;
    asChield?: boolean;
    className?: string;
}

export function ShowMore({ className, asChield, children }: ShowMoreProps) {
    const Comp = asChield ? Slot : 'span';

    return (
        <Comp
            className={clsx(
                'span',
                {},
                className,
            )}
        >
            <div className='flex items-center text-center'>
                <Text className='
                    text-2xl
                    md:text-4xl
                    lg:text-xl'
                >
                    <a className='mr-5'>
                        <TooltipEye />
                    </a>

                </Text>

                <div className='flex flex-col'>

                    <Text className='
                        text-start font-light cursor-pointer hover:shadow-xl
                        text-[10px]
                        sm:text-[14px]
                        md:text-[16px]
                        lg:w-24'
                    >
                        <a href=''>Show More</a>

                    </Text>

                    <Text className='
                        mt-2 text-[8px] opacity-75 w-16
                        sm:text-[10px] sm:w-20
                        md:w-28
                        lg:w-auto'
                    >
                        
                        <p className='truncate'>Gibson Les Paul Cherry 230</p>
                        
                    </Text>
                </div>
            </div>
            {children}
        </Comp>
    )
}