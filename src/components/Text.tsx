import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    children: ReactNode;
    asChield?: boolean;
    className?: string;
    id?: string;
}

export function Text({children, asChield, className }: TextProps) {
    const Comp = asChield ? Slot : 'span';

    return (
        <Comp
            className={clsx(
                'font-sans',
                {},
                className,
            )}
        >
            {children}
        </Comp>
    )
}