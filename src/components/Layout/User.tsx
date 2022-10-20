import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { AvatarLoginUser } from './Avatar';

export interface UserLogProps {
    className?: string;
    asChield?: boolean;
    id?: string;
}

export function UserLog ({id, className, asChield}: UserLogProps) {
    const Comp = asChield ? Slot : 'button';

    return (
        <Comp className={clsx(className, id)}>
            <div className='flex'>
                <AvatarLoginUser className='ring-2 ring-lightPink rounded-full hover:ring-white-500 hover:scale-110'/>
            </div>
        </Comp>
    )
}