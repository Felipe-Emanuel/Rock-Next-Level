import { TooltipChat } from '../Layout/FnTooltip'
import { Text } from '../Layout/Text'


function showChatMessage () {
    const chatMessage = document.querySelector('#chatMessage') as HTMLParagraphElement

    chatMessage.style.width = '100%';
}

function hideChatMessage() {
    const chatMessage = document.querySelector('#chatMessage') as HTMLParagraphElement

    chatMessage.style.width = '0%'
}

export function Chat() {
    return (
        <div
            data-animate='right'
            className='
            z-50 hidden cursor-pointer text-purple-400 font-light items-center fixed bottom-6 left-[95%]
            lg:flex flex-col lg:w-[10px]'
            >
            <div
                onMouseOver={showChatMessage}
                onMouseOut={hideChatMessage}
                className='w-36 flex flex-row h-10 items-center gap-x-2'>
                    <p id='chatMessage' className='z-50 duration-500 w-0 overflow-hidden truncate'>Olá, Felipe Emanuel!</p>
                <Text data-animate='right'>
                <span 
                    
                    className='ml-2 flex'>
                    <span className="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-purple-400 opacity-25"></span>
                        <a
                            href='#'>
                            <TooltipChat />
                        </a>
                </span>
                </Text>
            </div>
        </div>
    )
}