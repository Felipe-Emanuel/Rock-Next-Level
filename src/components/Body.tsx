import { Chat } from "./Chat";
import { Down } from "./Down";
import { GuitarCard } from "./GuitarCard";
import { LastReview } from "./LastReview";
import { ScrollDown } from "./ScrollDown";
import { Text } from "./Text";

export function Body () {
    return (
        <div>
                <Chat />
                <Down />

            <header>
                <ScrollDown />
                <Text className='
                    text-[22px] mt-16 animate-pulse font-light flex justify-center text-center 
                    sm:text-[24px]
                    md:text-[48px]'
                >

                    <h2 data-animate='down'>MONTHLY'S MOST SEARCHED</h2>
                </Text>
                <GuitarCard />
            </header>

            <main>
                <Text className='
                    text-[22px] mt-16 animate-pulse font-light flex justify-center 
                    sm:text-[24px]
                    md:text-[48px]'
                >
                                    
                    <h2 data-animate='left' >LAST REVIEW</h2>
                </Text>
                <LastReview />
                
            </main>

        </div>
    )
}