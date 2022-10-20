import { User, CaretDown } from 'phosphor-react'
import { Text } from './Text'


export function UserLog () {
    return (
        <div className='flex flex-col items-center'>
            <User className='w-6 xl:w-20 text-lightPink mt-8 h-10  hover:text-white-Total' />
            <Text className='text-sm text-lightPink flex flex-row gap-2 m-auto hover:text-white-Total'>
                Login
                <button>
                    <CaretDown className='text-lightPink hover:text-white-Total hover:animate-bounce'/>
                </button>
            </Text>
        </div>
    )
}