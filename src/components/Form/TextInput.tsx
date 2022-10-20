import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootsProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootsProps) {
    return (
        <div className='flex items-center gap-3 px-3 h-14 rounded bg-transparent w-full ring-2 ring-lightPink focus-within:ring-white-Total'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';


export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
       <Slot className='w-5 h-5 text-lightPink opacity-50'>
            {props.children}
       </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
         <input
            className="bg-transparent flex-1 text-lightPink text-xs placeholder:text-lightPink placeholder:opacity-50 outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}