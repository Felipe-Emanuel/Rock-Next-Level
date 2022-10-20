import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { Text } from "./Text";
import { TooltipInfo } from "./FnTooltip";

export interface EspecificationsProps {
    children?: ReactNode;
    asChield?: boolean;
    className?: string;
}

export function Especifications({ className, asChield, children }: EspecificationsProps) {
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

                <Text className='
                    text-2xl
                    md:text-4xl
                    lg:text-xl'
                >

                    <a className='mr-5'>
                        <TooltipInfo />
                    </a>

                </Text>

                <div className='flex flex-col'>

                    <Text className='
                        font-light cursor-pointer hover:underline
                        text-[10px]
                        sm:text-[14px]
                        md:text-[16px]'
                    >

                        <a href='' className='
                            no-underline text-black
                            sm:w-20 sm:truncate
                            md:w-auto'
                        >
                            Especifications
                        </a>

                    </Text>
                </div>
            </div>

            {children}

        </Comp>
    )
}
