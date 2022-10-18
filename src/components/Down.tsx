import { CaretDown } from "phosphor-react";
import { Text } from "./Text";

export function Down() {

    return (
        <div data-animate='left'
            className='
            z-50 hidden font-light fixed mt-24 
            md:flex md:flex-col'
        >
            <div className='
                ml-1 w-6 h-6 animate-bounce items-center
                md:flex md:flex-col'>
                    <Text className='text-[10px]' >
                        D
                    </Text>
                    <Text className='text-[10px]' >
                        O
                    </Text>
                    <Text className='text-[10px]' >
                        W
                    </Text>
                    <Text className='text-[10px]' >
                        N
                    </Text>
                    <Text>
                        <CaretDown />
                    </Text>
            </div>
        </div>
    )
}