
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChield?: boolean;
}

export function Button({ children, asChield, className, ...props }: ButtonProps) {
    const Comp = asChield ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                'font-thin hover:font-normal w-40 py-4 px-4 bg-transparent rounded text-lightPink transition-colors hover:text-white-Total ring-1 ring-lightPink focus:ring-white-Total focus:text-white-Total',
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}