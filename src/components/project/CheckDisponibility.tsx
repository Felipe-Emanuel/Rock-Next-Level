import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { TooltipChat } from '../Layout/FnTooltip';

import { Text } from '../Layout/Text'

export interface CheckDisponibilityProps {
    children?: ReactNode;
    asChield?: boolean;
    className?: string;
}

export function CheckDisponibility({ className, asChield, children }: CheckDisponibilityProps) {
    const Comp = asChield ? Slot : 'span';

    return (
        <Comp
            className={clsx(
                'span',
                {},
                className,
            )}
        >
        <div className='mt-6 flex items-center text-center'>

            <a className='mr-5'>
                <TooltipChat />
            </a>

            <div className='flex flex-col'>

                <Text className='
                    text-[10px] font-light cursor-pointer hover:underline
                    sm:text-[14px]
                    md:text-[16px]'
                >
                    <a href='' className='no-underline text-black'>Disponibility</a>

                </Text>

                <Text className='
                    mt-2 text-[8px] opacity-75
                    sm:text-[10px]'
                >

                    <p className='text-start'>Chat with us</p>
                    
                </Text>
            </div>
        </div>
        {children}
    </Comp>
    )
}