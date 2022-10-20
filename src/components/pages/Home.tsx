import { Footer } from "../Layout/Footer";
import { Heading } from "../Layout/Heading";

import { Chat } from "../Layout/Chat";
import { Down } from "../Layout/Down";
import { GuitarCard } from "../project/GuitarCard";
import { LastReview } from "../Layout/LastReview";
import { ScrollDown } from "../Layout/ScrollDown";
import { Text } from "../Layout/Text";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <Heading />
            <div className='bg-white-500'>

                <Chat />
                <Down />

            <header >
                <div>
                    <ScrollDown />
                </div>
                <Text className='
                    text-[22px] animate-pulse font-light flex justify-center text-center  
                    sm:text-[24px]
                    md:text-[48px]'
                >

                    <h2 data-animate='down'>MONTHLY'S MOST SEARCHED</h2>
                </Text>
                <GuitarCard />
            </header>

            <main>
                <div id='last-review'>
                    <Text className='
                        text-[22px] mt-16 animate-pulse font-light flex justify-center text-center 
                        sm:text-[24px]
                        md:text-[48px]'
                    >
                        <h2 data-animate='left'>LAST REVIEW</h2>
                    </Text>
                    <Link to='/LastReviewPage'>
                        <LastReview />
                    </Link>
                </div>
                <div id="for-sale">
                    <Text className='
                        text-[22px] mt-16 animate-pulse font-light flex justify-center text-center 
                        sm:text-[24px]
                        md:text-[48px]'
                    >
                        <h2 data-animate='rigth'>FOR SALE!</h2>
                    </Text>
                </div>
            </main>
        </div>
            <Footer />
        </>
    )
}